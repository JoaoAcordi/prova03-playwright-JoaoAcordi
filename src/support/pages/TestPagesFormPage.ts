import { Page } from '@playwright/test';

export class TestPagesFormPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }


  async navigate() {
    await this.page.goto('https://testpages.eviltester.com/pages/forms/html-form/');
    await this.page.waitForSelector('input[name="username"]', { timeout: 10000 });
  }


  async fillForm(username: string, password: string, comments: string) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.fill('textarea[name="comments"]', comments);
  }


  async submit() {
    await this.page.click('input[name="submitbutton"]'); 
  }


  async getSubmissionResult() {
    return await this.page.textContent('#_message'); 
  }
}
