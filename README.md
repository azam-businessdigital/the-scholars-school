# The Scholars High School & Junior College for Commerce
## Complete Website Redesign & Production Deployment Documentation

Official Name: **The Scholars High School & Junior College for Commerce**  
Governing Trust: **Al-Qalam Educational Trust (Regd. 1991, Mumbai)**  
Established: **1993**  
Location: **Captain Suresh Samant Marg, Agarwal Estate, Opp. Hill Park Tower, Jogeshwari (West), Mumbai 400102, Maharashtra, India**  
Official Domain: [https://thescholarsschool.edu.in/](https://thescholarsschool.edu.in/)  
Frontend Framework: **React 18 + Vite + React Router DOM**  
Styling: **Custom Vanilla CSS Design System** (Zero unwanted CSS bloat, exact color tokens)

---

## 1. Approved Brand Color Palette

| Token Name | HEX Code | Usage |
|---|---|---|
| **Royal Navy** | `#142B4A` | Header, footer, primary headings, high-contrast surfaces |
| **Deep Blue** | `#1D3D63` | Primary buttons, active navigation, interactive elements |
| **Champagne Gold** | `#C6A15B` | Accents, badges, borders, icons, highlights |
| **Ivory White** | `#FAF8F2` | Alternating section backgrounds, subtle contrast |
| **Pure White** | `#FFFFFF` | Cards, forms, content surfaces |
| **Slate Grey** | `#64748B` | Secondary text, paragraphs, descriptive copy |

Typography:
- **Headings**: *Playfair Display* (Refined serif)
- **Body**: *Inter* (Clean, legible sans-serif)

---

## 2. Information Architecture & Sitemap

### Main Pages
- `/` - Homepage (13 ordered sections)
- `/about-us/` - Institutional Overview, History, Vision & Mission, Leadership, Trustees
- `/academics/` - Overview of all 6 educational sections
- `/admissions/` - Admission Process, Eligibility, Required Documents, Interactive Form, FAQs
- `/announcements/` - Searchable Notices, Official Circulars, Board Results
- `/results/` - 100% Board Pass Records, SSC & HSC Gazette PDF downloads
- `/events/` - School Celebrations, Independence Day, Sports Day, Creative Arts
- `/gallery/` - Filterable Photo Gallery with accessible Lightbox
- `/careers/` - Verified Vacancies (Head Mistress, Subject Teachers), Application Instructions
- `/contact-us/` - Verified Contact Telephones, Emails, Interactive Form, Campus Map
- `/privacy-policy/` - Student & Parent Data Protection, Privacy Policy
- `/terms-of-use/` - Website Terms & Conditions

### Academic Subsections
- `/academics/mrak-kids/` - Maulana Riyaz Ahmed Khan Kids Pre School
- `/academics/pre-primary/` - Nursery, Junior KG, Senior KG
- `/academics/primary/` - Grades 1 to 4 (Boys & Girls)
- `/academics/secondary/` - Grades 5 to 10 (Maharashtra SSC Board)
- `/academics/deeniyat/` - Modern Education with Islamic Frame of Reference
- `/academics/junior-college/girls/` - Higher Secondary Commerce (Girls Section)
- `/academics/junior-college/boys/` - Higher Secondary Commerce (Boys Section)

### Custom Error & Fallbacks
- `*` - Custom 404 Page Not Found with quick recovery navigation

---

## 3. Local Development & Build

### Prerequisites
- Node.js version 18+ or 20+ (Tested on v24.19.0)
- npm version 9+ (Tested on 11.17.0)

### Installation
```bash
# Install dependencies
npm install
```

### Development Server
```bash
# Start Vite development server
npm run dev
# Server runs at http://localhost:3000/
```

### Production Build
```bash
# Generate optimized production bundle
npm run build
# Output directory: ./dist
```

### Local Preview of Production Build
```bash
npm run preview
# Preview runs at http://localhost:4173/
```

---

## 4. Production Deployment (cPanel / Apache Shared Hosting)

The application is structured for shared hosting on Apache with cPanel.

### Step 1: Generate the Production Build
Run `npm run build` on your local development machine. This creates the production bundle in the `dist/` directory.

### Step 2: Upload Files to cPanel Document Root
1. Log in to cPanel -> **File Manager**.
2. Navigate to the root directory for `thescholarsschool.edu.in` (typically `public_html/`).
3. Back up the existing website files to an archive (e.g. `backup_previous_site.zip`).
4. Upload all contents of the `dist/` folder into `public_html/` (including `.htaccess`, `index.html`, `assets/`, `images/`, `documents/`, `robots.txt`, `sitemap.xml`, and `llms.txt`).
5. Ensure the file permissions are:
   - Folders: `755`
   - Files: `644`

### Step 3: Verify `.htaccess` Routing and Security Headers
The provided `public/.htaccess` file is automatically copied to `dist/.htaccess` during build and contains:
- **HTTPS Enforcement**: 301 redirection from HTTP to HTTPS.
- **Legacy 301 Redirects**: Redirects old `.php` URLs (`about-us.php`, `pre-primary-section.php`, etc.) to clean SEO URLs.
- **SPA Routing Fallback**: `RewriteRule . /index.html [L]` ensures direct page refreshes work properly.
- **Security Headers**:
  - `Content-Security-Policy`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- **Asset Compression & Caching**: `mod_deflate` and `mod_expires` for fast loading under 2 seconds.

---

## 5. Security & Data Protection Controls

1. **Client-Side Secrets Protection**:
   - Zero private API keys or database credentials exist in frontend code.
   - All environment variables are restricted to safe public strings (`VITE_SITE_URL`).
2. **Form Security & Spam Prevention**:
   - Client-side validation: character limits, regex validation for phone numbers and emails.
   - Honeypot anti-spam protection: Bots filling hidden input fields are silently rejected without server overhead.
   - Zero `localStorage` caching of confidential student or parent details.
3. **Dependency Security**:
   - `npm audit` reports **0 vulnerabilities**.
4. **Git Protection**:
   - Clean `.gitignore` prevents staging `.env`, logs, dumps, or build artifacts.

---

## 6. Rollback Procedures

If an immediate rollback to the legacy website is ever necessary:
1. Access cPanel File Manager.
2. Rename current `public_html/` to `public_html_revamp_backup/`.
3. Extract your `backup_previous_site.zip` into `public_html/`.
4. Clear server-side Varnish/cPanel caching and browser cache to restore the prior state.
