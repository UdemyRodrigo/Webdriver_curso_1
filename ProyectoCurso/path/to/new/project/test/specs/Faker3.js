const FG=require('./page/Funciones2')

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

      
        await FG.Faker_Name("//input[contains(@id,'wsf-1-field-21')]")       
        await FG.Faker_Apellido("//input[contains(@id,'wsf-1-field-22')]")
        await FG.Faker_Email("//input[contains(@id,'wsf-1-field-23')]")
        await FG.Faker_Empresa("//input[contains(@id,'wsf-1-field-24')]")
        await FG.Faker_password("//textarea[contains(@id,'wsf-1-field-28')]")
        await browser.pause(3000)
       

        await $("//button[contains(@id,'wsf-1-field-27')]").click()

        let val=await $("//p[contains(.,'Gracias por tu encuesta.')]").getText()

        console.log("Valor del texto Final: " + val)

        expect(val).toEqual("Gracias por tu encuesta.")

        await browser.pause(3000)



    });
});