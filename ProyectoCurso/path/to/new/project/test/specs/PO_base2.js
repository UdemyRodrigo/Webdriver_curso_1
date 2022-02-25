//https://webdriver.io/docs/api/element/getAttribute/

describe('Demo de la Práctica de POM 2', () => {
    //Variables Globales
    let tiempo=1000
    it('Cargando segundo TEST', async () => {
        await browser.url('https://testingqarvn.com.es/combobox/')
        await browser.maximizeWindow()
        await browser.pause(2000)
        //Assert title
        await expect(browser).toHaveTitle('ComboBox | TestingQaRvn')

        await browser.pause(tiempo)

        await $("//input[contains(@id,'wsf-1-field-45')]").setValue('Rodrigo')
        await browser.pause(tiempo)
        await $("//input[contains(@id,'wsf-1-field-46')]").setValue('Villanueva')
        await browser.pause(tiempo)
        await $("//input[contains(@id,'wsf-1-field-47')]").setValue('rodrigo@gmail.com')
        await browser.pause(tiempo)
        await $("//input[contains(@id,'wsf-1-field-48')]").setValue('5540785421')
        await browser.pause(tiempo)
        await $("//textarea[contains(@id,'wsf-1-field-49')]").setValue('Demo de la Dirección')
        await browser.pause(tiempo)

        //check
        await $("//label[contains(@id,'wsf-1-label-50-row-2')]").click()
        await browser.pause(tiempo)
        await $("//label[contains(@id,'wsf-1-label-51-row-2')]").click()
        await browser.pause(tiempo)

        //combo
        let com=await $("//select[contains(@id,'wsf-1-field-53')]")
        com.selectByIndex(1)
        await browser.pause(tiempo)

        let com2=await $("//select[contains(@id,'wsf-1-field-53')]")
        com.selectByVisibleText("Windows")
        await browser.pause(tiempo)

        let com3=await $("//select[contains(@id,'wsf-1-field-53')]")
        com.selectByAttribute("value","Mac")
        await browser.pause(tiempo)

        
        await $("//button[contains(@id,'wsf-1-field-52')]").click()

        
        //Validar
        let val=await $("//p[contains(.,'Gracias por tu encuesta.')]").getText()

        console.log("Valor del texto Final: " + val)

        expect(val).toEqual("Gracias por tu encuesta.")

        await browser.pause(3000)
        


    });
});