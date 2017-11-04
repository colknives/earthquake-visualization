import { GeoJsonVisualPage } from './app.po';

describe('geo-json-visual App', () => {
  let page: GeoJsonVisualPage;

  beforeEach(() => {
    page = new GeoJsonVisualPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
