import { browser } from 'protractor';

const testUrl = 'http://127.0.0.1:9000';

export async function loadRoute(route: string) {
  await browser.loadAndWaitForAureliaPage(`${testUrl}/#/${route}`);
  await new Promise(r => setTimeout(r, 500));
}
