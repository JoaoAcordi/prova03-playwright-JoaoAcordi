import { test, expect } from '@playwright/test';
import { TestPagesFormPage } from '../support/pages/TestPagesFormPage';

test.describe('ZeroStep AI Form Scenario', () => {
  test('preenche formulário completo com Playwright', async ({ page }) => {
    const formPage = new TestPagesFormPage(page);

    await formPage.navigate();

    const username = 'usuario123';
    const password = 'senha123';
    const comments = 'Comentário de teste gerado automaticamente.';
    const checkboxes = ['cb1', 'cb3'];
    const radioValue = 'rd1';
    const multipleSelects = ['ms2', 'ms4'];
    const dropdown = 'dd2';

    await formPage.fillForm(
      username,
      password,
      comments,
      checkboxes,
      radioValue,
      multipleSelects,
      dropdown
    );

    await formPage.submitForm();

    // Valida que a página mudou ou que algum elemento de confirmação aparece
    await expect(page).toHaveURL(/submit/);
  });
});
