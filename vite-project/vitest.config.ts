import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      include: ['src/lib/**/*.svelte'],
      exclude: ['**/node_modules/**', '**/test_*.ts']
    }
  },
});