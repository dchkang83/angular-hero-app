import { HeroEditorAppPage } from './app.po';

describe('hero-editor-app App', function() {
  let page: HeroEditorAppPage;

  beforeEach(() => {
    page = new HeroEditorAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
