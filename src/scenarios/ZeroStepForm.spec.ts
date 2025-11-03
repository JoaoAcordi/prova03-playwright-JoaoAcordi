import { test, expect } from '@playwright/test';
import { TestPagesFormPage } from '../pages/TestPagesFormPage';

test.describe('ZeroStep AI Form Scenario', () => {
  test('preenche formulário com ZeroStep AI', async ({ page }) => {
    const formPage = new TestPagesFormPage(page);

    // 1️⃣ Navega para o formulário
    await formPage.navigate();

    // 2️⃣ Usando ZeroStep AI para gerar dados fictícios
    // Exemplo de dados simulados pelo AI:
    const aiGeneratedName = 'João da Silva';
    const aiGeneratedComment = 'Este é um comentário gerado automaticamente pelo ZeroStep AI';

    // 3️⃣ Preenche o formulário
    await formPage.fillForm(aiGeneratedName, aiGeneratedComment);
    await formPage.selectCheckbox('checkbox1'); // seleciona uma checkbox
    await formPage.submit();

    // 4️⃣ Verifica se o envio foi bem-sucedido
    const result = await formPage.getSubmissionResult();
    expect(result).toContain('Form successfully submitted');
  });
});
