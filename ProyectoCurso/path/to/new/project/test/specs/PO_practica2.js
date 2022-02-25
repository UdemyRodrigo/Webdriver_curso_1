const FG=require('./page/Funciones2');
const allureReporter = require('@wdio/allure-reporter').default

describe('Demo de la Práctica de POM', () => {
    //Variables Globales
    let tiempo=1500
    it('Cargando nuestro segundo con POM TEST', async () => {

        
        allureReporter.addFeature("Práctica Dos sección Feature")
        allureReporter.addSeverity("critical")
        allureReporter.addLabel("Prueba POM sección dos","Demo de la Prueba")
        allureReporter.addDescription("Practica dos POM","text")

        
        FG.open_arg("https://testingqarvn.com.es/combobox/","ComboBox | TestingQaRvn");
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-45')]","Rodrigo")        
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-46')]","Villanueva")        
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-47')]","rodrigo@gmail.com")        
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-48-48')]","57898765")
        await FG.Texto_Simple("//textarea[contains(@id,'wsf-1-field-49')]","Demo de la Dirección")
        
        
        //checkbox
        await FG.Click("//label[contains(@id,'wsf-1-label-50-row-1')]")
        await FG.Click("//label[contains(@id,'wsf-1-label-51-row-2')]")
        

        //Combo
        await FG.ComboIndex("//select[contains(@id,'wsf-1-field-53')]",1)
        await FG.ComboVisible("//select[contains(@id,'wsf-1-field-53')]","Windows")
        await FG.ComboVal("//select[contains(@id,'wsf-1-field-53')]","Mac")

        //click
        await FG.Click("//button[contains(@id,'wsf-1-field-52')]")

        //Validar
        await FG.Validar_texto("//p[contains(.,'Gracias por tu encuesta.')]","Gracias por tu encuesta.")


        await browser.pause(3000)
        
        
    });
});