export const selectRadio = async (form: Promise<WebdriverIO.ElementArray>, value: string) => {
    for (const radio of await form) {
        const element = await radio.getValue()
        if (element === value) {
            await radio.click()
            break
        }
    }
}

export const setText = async (form: Promise<WebdriverIO.Element>, text: string) => {
    await (await form).setValue(text)
}

export const setDropdown = async (form: Promise<WebdriverIO.Element>, text: string) => {
    await (await form).selectByAttribute('value', text)
}

export const setDropdownVisibleText = async (form: Promise<WebdriverIO.Element>, text: string) => {
    await (await form).selectByVisibleText(text)
}

export const click = async (button: Promise<WebdriverIO.Element>) => {
    await (await button).click()
}