const FG=require('./page/Funciones2');
const allureReporter = require('@wdio/allure-reporter').default


describe('Demo de la Práctica de POM', () => {
    //Variables Globales
    let tiempo=2000
    it('Cargando practica cuarta con POM TEST', async () => {

        allureReporter.addFeature("Práctica Pow cuatro sección Feature")
        allureReporter.addSeverity("critical")
        allureReporter.addLabel("Prueba POM","Demo de la Prueba")
        allureReporter.addDescription("Practica uno","text")
        FG.open_arg("https://testingqarvn.com.es/datos-personales/","Datos Personales | TestingQaRvn");
      
        await FG.Texto_Simple_try("//input[contains(@id,'wsf-1-field-21')]","Rodrigo")
        //await FG.Texto_Simple("Rodrigo")

        await FG.Texto_Simple_try("//input[contains(@id,'wsf-1-field-22')]","Villanueva")
        await FG.Texto_Simple_try("//input[contains(@id,'wsf-1-field-23')]","rodrigo@gmail.com")

        await browser.pause(tiempo)
               
        //click
        /*
        await FG.Click("//button[contains(@id,'wsf-1-field-109')]")

        await FG.ValidarCampo("//input[contains(@id,'wsf-1-field-95')]","//div[contains(@id,'wsf-1-invalid-feedback987')]","Rodrigo")
        */
        //Validar
        /*
        await FG.Validar_texto("//p[contains(.,'Gracias por tu encuesta.')]","Gracias por tu encuesta.")
        await browser.pause(3000)
        */

        
        
        
    });
});