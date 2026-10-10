import { describe, it, expect } from 'vitest';

describe('Configuração de Autenticação: auth.ts', () => {
  it('deve exportar JWT_SECRET com a chave secreta padrão quando a variável de ambiente não estiver definida', async () => {
    // Arrange: Remove a variável de ambiente temporariamente
    const originalSecret = process.env.JWT_SECRET;
    delete process.env.JWT_SECRET;

    // Act: Importa o módulo dinamicamente para forçar a reavaliação
    delete require.cache[require.resolve('./auth')];
    const { JWT_SECRET } = await import('./auth');

    // Assert
    expect(JWT_SECRET).toBe('chave_secreta_padrao');

    // Restore
    if (originalSecret !== undefined) {
      process.env.JWT_SECRET = originalSecret;
    }
  });
});
