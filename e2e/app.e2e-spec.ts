import { PrBoardPage } from './app.po';

describe('pr-board App', function() {
  let page: PrBoardPage;

  beforeEach(() => {
    page = new PrBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
