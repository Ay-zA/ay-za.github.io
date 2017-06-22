import { browser, by, element } from 'protractor';

export class GenoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('geno-root h1')).getText();
  }
}
