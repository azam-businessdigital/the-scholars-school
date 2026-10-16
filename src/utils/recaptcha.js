/**
 * Google reCAPTCHA v3 Client Helper
 * Site Key: 6LduSywsAAAAAPsXrHwQMmYIxZivlGz44IIWg9Xm
 */

export const RECAPTCHA_SITE_KEY = '6LduSywsAAAAAPsXrHwQMmYIxZivlGz44IIWg9Xm';

let recaptchaLoadedPromise = null;

function loadRecaptchaScript() {
  if (typeof window === 'undefined') return Promise.resolve(null);
  if (window.grecaptcha) return Promise.resolve(window.grecaptcha);

  if (recaptchaLoadedPromise) return recaptchaLoadedPromise;

  recaptchaLoadedPromise = new Promise((resolve) => {
    // Check if script tag already exists
    const existing = document.querySelector(`script[src*="recaptcha/api.js"]`);
    if (existing) {
      if (window.grecaptcha) {
        return resolve(window.grecaptcha);
      }
      existing.addEventListener('load', () => resolve(window.grecaptcha));
      existing.addEventListener('error', () => resolve(null));
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.grecaptcha);
    script.onerror = () => {
      console.warn('reCAPTCHA script failed to load (check adblock or network).');
      resolve(null);
    };
    document.head.appendChild(script);
  });

  return recaptchaLoadedPromise;
}

/**
 * Execute reCAPTCHA v3 and return the verification token
 * @param {string} action - 'admission_enquiry' | 'contact_form'
 * @returns {Promise<string|null>}
 */
export async function executeRecaptcha(action = 'submit') {
  try {
    const grecaptcha = await loadRecaptchaScript();
    if (!grecaptcha) return null;

    return new Promise((resolve) => {
      grecaptcha.ready(async () => {
        try {
          const token = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
          resolve(token);
        } catch (err) {
          console.warn('reCAPTCHA execution error:', err);
          resolve(null);
        }
      });
    });
  } catch (e) {
    console.warn('reCAPTCHA helper error:', e);
    return null;
  }
}
