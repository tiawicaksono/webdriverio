import { APICalls } from "../enums/APICalls";
import { click, setText, setDropdownVisibleText } from "../utils/commands";

import Page from "./page";

class ApiUserPage extends Page {
    private get url_textbox() { return $('#urlvalue') }
    private get method() { return $('#httpmethod') }
    private get addParamBtn() { return $('#addprambutton') }
    private get ajax_btn() { return $('#submitajax') }
    private get success_elem() { return $('.alert-success') }
    private get status_text() { return $('#statuspre') }
    private get output_area() { return $('#outputpre') }
    private get paramName1() {
        return $("//div[@id='allparameters']//input[contains(@class,'fakeinputname') and @value]")
    }
    private get paramValue1() {
        return $("//div[@id='allparameters']//input[contains(@class,'realinputvalue') and @value]")
    }
    private get paramName2() {
        return $("(//div[@id='allparameters']//input[contains(@class,'fakeinputname') and @value])[2]")
    }
    private get paramValue2() {
        return $("(//div[@id='allparameters']//input[contains(@class,'realinputvalue') and @value])[2]")
    }

    async openApp(pageurl: string) {
        await browser.url(pageurl)
    }

    async enterAPIUrl(apiendpoint: string) {
        await setText(this.url_textbox, apiendpoint)
    }

    //GET
    async clickOnAjaxbtn() {
        await click(this.ajax_btn)
    }

    async getStatusText(): Promise<string> {
        await (await this.success_elem).waitForDisplayed
        return (await this.status_text).getText()
    }

    async getOutputResponseText(): Promise<string> {
        return (await this.output_area).getText()
    }

    //POST
    async dropdownSelectMethod(value: APICalls) {
        await setDropdownVisibleText(this.method, value)
    }

    async clickOnAddParamButton() {
        await click(this.addParamBtn)
    }

    async enterFirstParam(key: string, value: string) {
        await setText(this.paramName1, key)
        await setText(this.paramValue1, value)
    }

    async enterSecondParam(key: string, value: string) {
        await setText(this.paramName2, key)
        await setText(this.paramValue2, value)
    }
}
export default new ApiUserPage()