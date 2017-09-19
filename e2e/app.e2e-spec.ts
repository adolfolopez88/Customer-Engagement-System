import { CustomerEngagementSystemPage } from './app.po';

describe('customer-engagement-system App', () => {
  let page: CustomerEngagementSystemPage;

  beforeEach(() => {
    page = new CustomerEngagementSystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
