import { GenoPage } from './app.po';

describe('geno App', () => {
  let page: GenoPage;

  beforeEach(() => {
    page = new GenoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to geno!!');
  });
});
