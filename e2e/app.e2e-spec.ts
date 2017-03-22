import { AngularnewsPage } from './app.po';

describe('angularnews App', () => {
  let page: AngularnewsPage;

  beforeEach(() => {
    page = new AngularnewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
