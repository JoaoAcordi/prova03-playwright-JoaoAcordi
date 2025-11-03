import { Page } from '@playwright/test';

export class TestPagesFormPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://testpages.eviltester.com/pages/forms/html-form/');
  }

  async fillForm(
    username: string,
    password: string,
    comments: string,
    checkboxes: string[] = [],
    radioValue: string = 'rd2',
    multipleSelects: string[] = ['ms4'],
    dropdown: string = 'dd3'
  ) {

    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);

    await this.page.fill('textarea[name="comments"]', comments);


    const allCheckboxes = await this.page.$$('input[name="checkboxes[]"]');
    for (const cb of allCheckboxes) {
      const value = await cb.getAttribute('value');
      if (value && checkboxes.includes(value)) {
        if (!(await cb.isChecked())) await cb.check();
      } else {
        if (await cb.isChecked()) await cb.uncheck();
      }
    }


    await this.page.check(`input[name="radioval"][value="${radioValue}"]`);


    await this.page.selectOption('select[name="multipleselect[]"]', multipleSelects);

    await this.page.selectOption('select[name="dropdown"]', dropdown);
  }

  async submitForm() {
    await this.page.click('input[name="submitbutton"][value="submit"]');
  }
}
