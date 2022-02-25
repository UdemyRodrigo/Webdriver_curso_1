describe('Demo  de la Página de POM', () => {

    let tiempo=2000

    it('Cargando la Prueba', async () => {
        await browser.url('https://testingqarvn.com.es/datos-personales/')
        await browser.maximizeWindow()
        await browser.pause(tiempo)
        //Assert title
        await expect(browser).toHaveTitle('Datos Personales | TestingQaRvn')

        await $("//input[@id='wsf-1-field-21']").setValue('Rodrigo')
        await browser.pause(tiempo)
        await $("//input[@id='wsf-1-field-22']").setValue('Villanueva')
        await browser.pause(tiempo)
        await $("//input[@id='wsf-1-field-23']").setValue('rodrigo@gmail.com')
        await browser.pause(tiempo)
        await $("//input[@id='wsf-1-field-24']").setValue('578890987')
        await browser.pause(tiempo)
        await $("//textarea[contains(@id,'wsf-1-field-28')]").setValue('Demo de la Dirección.')
        await browser.pause(tiempo)

        await $("//button[@id='wsf-1-field-27']").click()

        let val= await $("//p[contains(.,'Gracias por tu encuesta.')]").getText()
        
        console.log("Valor de Resultado: " + val)

        expect(val).toEqual("Gracias por tu encuesta.");
        await browser.pause(3000)
    });

   
});