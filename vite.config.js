import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { spawn } from 'child_process';

function phpDevServerPlugin() {
  let phpProc = null;

  return {
    name: 'php-dev-backend',
    configureServer(server) {
      try {
        phpProc = spawn('php', ['-S', '127.0.0.1:8008', '-t', 'public'], {
          stdio: 'ignore'
        });
        phpProc.on('error', (err) => {
          console.warn('[vite-php] PHP CLI failed to launch for local testing:', err.message);
        });
      } catch (err) {
        console.warn('[vite-php] Could not spawn local PHP server:', err.message);
      }

      const cleanup = () => {
        if (phpProc) {
          try {
            phpProc.kill();
          } catch (_) {}
          phpProc = null;
        }
      };

      process.on('exit', cleanup);
      process.on('SIGINT', cleanup);
      process.on('SIGTERM', cleanup);
      server.httpServer?.on('close', cleanup);
    }
  };
}

export default defineConfig({
  plugins: [react(), phpDevServerPlugin()],
  build: {
    sourcemap: false, // Security: do not expose source maps in production
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor';
          }
          if (id.includes('node_modules/react-router')) {
            return 'router';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons';
          }
        }
      }
    },
    chunkSizeWarningLimit: 600
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8008',
        changeOrigin: true,
        rewrite: (path) => {
          if (path === '/api/contact') return '/api/contact.php';
          if (path === '/api/admission-enquiry') return '/api/admission.php';
          return path;
        }
      }
    }
  }
});
