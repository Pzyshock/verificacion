import { VerificacionPage } from './app.po';

describe('verificacion App', function() {
  let page: VerificacionPage;

  beforeEach(() => {
    page = new VerificacionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
