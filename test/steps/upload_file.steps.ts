import { Given, Then } from '@wdio/cucumber-framework';
const path = require('path')

Given(/^I open browser and load url form upload file (.+)$/, async function (uploadpageurl) {
    await browser.url(uploadpageurl)
    await browser.maximizeWindow()
});

Then(/^I upload file$/, async function () {
    const formInput = await $('#file-upload')
    const button = await $('#file-submit')
    const filePath = path.join(__dirname, '../data/stempel.png')
    const remoteFilePath = await browser.uploadFile(filePath)

    await (formInput).setValue(remoteFilePath)
    await (button).click()
    await browser.pause(10000)
});