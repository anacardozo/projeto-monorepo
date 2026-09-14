import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // habilita variaveis globais do javascript, pra não fazer imports
    globals: true,
    environment: 'node',
    include: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
    exclude: ['node_modules', 'dist'],
  },
});
