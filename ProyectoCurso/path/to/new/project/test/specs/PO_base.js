describe('Demo de la Práctica de POM', () => {
    //Variables Globales
    let tiempo=1000
    it('Cargando nuestro primer TEST', async () => {
        await browser.url('https://testingqarvn.com.es/datos-personales/')
        await browser.maximizeWindow()
        await browser.pause(2000)
        //Assert title
        await expect(browser).toHaveTitle('Datos Personales | TestingQaRvn')

        await browser.pause(tiempo)

        await $("//input[contains(@id,'wsf-1-field-21')]").setValue('Rodrigo')
        await browser.pause(tiempo)
        await $("//input[contains(@id,'wsf-1-field-22')]").setValue('Villanueva')
        await browser.pause(tiempo)
        await $("//input[contains(@id,'wsf-1-field-23')]").setValue('rodrigo@gmail.com')
        await browser.pause(tiempo)
        await $("//input[contains(@id,'wsf-1-field-24')]").setValue('5540785421')
        await browser.pause(tiempo)
        await $("//textarea[contains(@id,'wsf-1-field-28')]").setValue('Demo de la Dirección')
        await browser.pause(tiempo)
        

        await $("//button[contains(@id,'wsf-1-field-27')]").click()

        let val=await $("//p[contains(.,'Gracias por tu encuesta.')]").getText()

        console.log("Valor del texto Final: " + val)

        expect(val).toEqual("Gracias por tu encuesta.")

        await browser.pause(3000)



    });
});