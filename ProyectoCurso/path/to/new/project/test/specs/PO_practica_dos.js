const FG=require('./page/Funciones2')

describe('Creando la Práctica Dos POM', () => {
    //Variables Globales
    let t=3000

    
    it('Primer Test POM', async () => {
        await FG.open_arg("https://testingqarvn.com.es/combobox/","ComboBox | TestingQaRvn")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-45')]","Juan")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-46')]","Villanueva")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-47')]","juan@gmail.com")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-48')]","55678978")
        await FG.Texto_Simple("//textarea[contains(@id,'wsf-1-field-49')]","Dirección demo dos")

        //Checkbox
        await FG.Click("//label[contains(@id,'wsf-1-label-50-row-2')]")
        await FG.Click("//label[contains(@id,'wsf-1-label-51-row-2')]")

        //Combo
        await FG.ComboIndex("//select[contains(@id,'wsf-1-field-53')]",1)
        await FG.ComboVisible("//select[contains(@id,'wsf-1-field-53')]","Windows")
        await FG.ComboVal("//select[contains(@id,'wsf-1-field-53')]","Mac")

        await FG.Click("//button[contains(@id,'wsf-1-field-52')]")

        await FG.Validar_texto("//p[contains(.,'Gracias por tu encuesta.')]","Gracias por tu encuesta.")






        await browser.pause(t)
    });
});