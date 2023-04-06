import { Given, Then } from '@wdio/cucumber-framework';
const path = require('path')

Given(/^I open browser and load url form upload hidden file (.+)$/, async function (uploadpageurl) {
    await browser.url(uploadpageurl)
    await browser.maximizeWindow()
});

Then(/^I select file to upload$/, async function () {
    const inputDiv = await $('#div_file_box0')
    const inputFile = await $('#input_file0')
    const button = await $('.convert_button')

    const filePath = path.join(__dirname, '../data/stempel.png')
    const remoteFilePath = await browser.uploadFile(filePath)

    await browser.execute(function () {
        document.getElementById('div_file_box0').style.display = 'block'
    })
    await (inputDiv).waitForDisplayed()
    await (inputFile).setValue(remoteFilePath)
    await (button).click()
    await browser.pause(10000)
});
