import { Given, When, Then } from '@wdio/cucumber-framework';
import { BASE_URI } from '../../src/config/APIConfig';
import UserPage from '../../src/pages/E2E_user.page';
import supertest from 'supertest'
import { APICalls } from '../../src/enums/APICalls';

const request = supertest(BASE_URI)
let response: supertest.Response

Given(/^I am on page (.+)$/, async function (homepageurl) {
    await UserPage.openApp(homepageurl)
});

//GET
When(/^I perform (.+) user search$/, async function (endpoint) {
    await UserPage.dropdownSelectMethod(APICalls.GET)
    await UserPage.enterAPIUrl(BASE_URI + endpoint)
    await UserPage.clickOnAjaxbtn()

    await browser.pause(5000)
});

When(/^I make GET (.+) API call$/, async function (endpoint) {
    response = await request.get(endpoint)
});

Then(/^I validate the search result$/, async function () {
    const ui_status = await UserPage.getStatusText()
    const ui_response = JSON.parse(await UserPage.getOutputResponseText())
    expect(ui_status).toContain(response.statusCode.toString())
    expect(ui_response.data.email).toEqual(response.body.data.email)
});

//POST
When(/^I perform create user search for api (.+), and input (.+) (.+)$/, async function (endpoint, name, job) {
    await UserPage.dropdownSelectMethod(APICalls.POST)
    await UserPage.enterAPIUrl(BASE_URI + endpoint)
    await UserPage.clickOnAddParamButton()
    await UserPage.enterFirstParam("name", name)
    await UserPage.clickOnAddParamButton()
    await UserPage.enterSecondParam("job", job)
    await UserPage.clickOnAjaxbtn()

    await browser.pause(5000)
});

When(/^I make POST (.+) API call, and input (.+) and (.+)$/, async function (endpoint, name, job) {
    const payload = {
        "name": name,
        "job": job
    }
    response = await request
        .post(endpoint)
        .send(payload)
        .set('content-type', 'application/json')

});

Then(/^I validate the crate user search result$/, async function () {
    const ui_status = await UserPage.getStatusText()
    expect(ui_status).toContain(response.statusCode.toString())
});