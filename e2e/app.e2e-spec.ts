import { AngularAWSDeployPage } from './app.po';

describe('angular-awsdeploy App', () => {
  let page: AngularAWSDeployPage;

  beforeEach(() => {
    page = new AngularAWSDeployPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
