import { click, setText, setDropdown, selectRadio } from "../utils/commands";
import Page from "./page";

class RetribusiPage extends Page {
    private get formNoStuk() { return $('#FORM_NO_STUK') }
    private get formNoKendaraan() { return $('#FORM_NO_KENDARAAN') }
    get formNoMesin() { return $('#FORM_NO_MESIN') }
    get formNoChasis() { return $('#FORM_NO_CHASIS') }
    private get dropdownJenisKendaraan() { return $('#FORM_JENIS_KENDARAAN') }
    get formJbb() { return $('#FORM_JBB') }
    private get dropdownJenisPengujian() { return $('#FORM_JENIS_PENGUJIAN') }
    private get radioKartuUji() { return $$('[name=BUKU_UJI]') }
    private get submit_btn() { return $('#btn_daftar') }

    async enterFormNoStuk(value: string) {
        // await (await this.formNoStuk).setValue(value)
        await setText(this.formNoStuk, value)
    }

    async enterFormNoKendaraan(value: string) {
        await setText(this.formNoKendaraan, value)
    }

    async selectDropdownJenisKendaraan(value: string) {
        await setDropdown(this.dropdownJenisKendaraan, value)
    }

    async selectDropdownJenisPengujian(value: string) {
        await setDropdown(this.dropdownJenisPengujian, value)
    }

    async selectRadio(value: string) {
        await selectRadio(this.radioKartuUji, value)
    }

    async clickButton() {
        await click(this.submit_btn)
    }
}
export default new RetribusiPage()