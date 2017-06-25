import { element, by } from 'protractor';

export module Page2 {
  export class PageObject {

    public async addValue(value: string) {
      const newValueInput = element(by.valueBind('newValue'));
      await newValueInput.sendKeys(value);
      await newValueInput.submit();
    }

    public async getValues() {
      return await element.all(by.css('.list-group-item'))
        .map<string>(x => x.getText());
    }
  }
}
