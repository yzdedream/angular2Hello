import { Angular2helloPage } from './app.po';

describe('angular2hello App', function() {
  let page: Angular2helloPage;

  beforeEach(() => {
    page = new Angular2helloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
