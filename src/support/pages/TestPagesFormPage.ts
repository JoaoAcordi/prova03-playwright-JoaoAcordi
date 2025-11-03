import { Page } from '@playwright/test';

export class TestPagesFormPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://testpages.eviltester.com/pages/forms/html-form/');
  }

  async fillForm(name: string, comments: string) {
    await this.page.fill('#forename', name);
    await this.page.fill('#comments', comments);
  }

  async selectCheckbox(option: string) {
    await this.page.check(`#${option}`);
  }

  async submit() {
    await this.page.click('input[type="submit"]');
  }

  async getSubmissionResult() {
    return await this.page.textContent('#_message');
  }
}
