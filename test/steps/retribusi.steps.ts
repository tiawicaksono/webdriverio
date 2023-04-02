import { Given, When, Then } from '@wdio/cucumber-framework';
import RetribusiPage from '../../src/pages/retribusi.page';

Given(/^I am on the retribusi page \"([^\"]*)\"$/, async function (appurl) {
    await browser.url(appurl)
});

When(/^I enter no_uji (.+) and no_kendaraan (.+) and no_mesin (.+) and no_chasis (.+) and jbb (.+)$/, async function (nouji, nokendaraan, nomesin, nochasis, jbb) {
    // const formNoStuk = await $('#FORM_NO_STUK')
    // await (formNoStuk).setValue(nouji)

    // await (await RetribusiPage.formNoStuk).setValue(nouji)
    await RetribusiPage.enterFormNoStuk(nouji)
    await RetribusiPage.enterFormNoKendaraan(nokendaraan)
    await browser.keys('Enter')
});

When(/^I select jenis_kendaraan (.+)$/, async function (jeniskendaraan) {
    await RetribusiPage.selectDropdownJenisKendaraan(jeniskendaraan)
});

When(/^I enter nama_pemilik (.+) and alamat (.+) and no_telp (.+)$/, async function (namapemilik, alamat, notelp) {
    // const formAlamat = await $('#FORM_ALAMAT')
    // const formNamaPemilik = await $('#FORM_NAMA_PEMILIK')
    // const formNoTelp = await $('#FORM_NO_TELP')

    // await (formNamaPemilik).setValue(namapemilik)
    // await (formAlamat).setValue(alamat)
    // await (formNoTelp).setValue(notelp)
});

When(/^I select jenis_pengujian (.+) and kartu_uji (.+)$/, async function (jenispengujian, kartuuji) {
    await RetribusiPage.selectDropdownJenisPengujian(jenispengujian)
    await RetribusiPage.selectRadio(kartuuji)
    await browser.pause(3000)

});

Then(/^I click submit button$/, async function () {
    await RetribusiPage.clickButton()
    await browser.pause(5000)
});

When(/^I select search_category (.+) and enter search no_uji (.+) and press enter$/, async function (searchcategory, searchtextfield) {
    const dropdownSearchCategory = await $('#select_category')
    const formSearch = await $('#text_category')

    await dropdownSearchCategory.selectByAttribute('value', searchcategory)
    await formSearch.setValue(searchtextfield)
    await browser.keys('Enter')
    await browser.pause(3000)
});