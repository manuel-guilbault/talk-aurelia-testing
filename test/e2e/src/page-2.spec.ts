import { loadRoute } from './config';
import { Page2 } from './page-2.po';

describe('The page-2', () => {
  let page2: Page2.PageObject;

  beforeEach(async done => {
    page2 = new Page2.PageObject();
    await loadRoute('page-2');
    done();
  });

  it('should display added value', async done => {
    const someValue = 'This is a test.';
    await page2.addValue(someValue);

    const displayedValues = await page2.getValues();
    expect(displayedValues).toEqual([someValue]);
    done();
  });
});
