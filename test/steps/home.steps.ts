import { Given, Then } from '@wdio/cucumber-framework';

Given(/^I open the browser and load the url (.+)$/, async function (homepageurl) {
    await browser.url(homepageurl)
    await browser.maximizeWindow()
});

Then(/^I should see a header message with text (.+)$/, async function (headertext) {
    const header = await $('.heading')
    expect(await header.getText()).toEqual(headertext)
});