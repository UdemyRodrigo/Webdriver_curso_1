const FG=require('./page/Funciones')

describe('Creando la Práctica Tres POM', () => {
    //Variables Globales
    let t=3000

    
    it('Primer Test POM', async () => {
        await FG.open_arg("https://testingqarvn.com.es/upload-files/","Upload Files | TestingQaRvn")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-80')]","Juan")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-81')]","Villanueva")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-82')]","juan@gmail.com")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-83')]","55678978")
        await FG.Texto_Simple("//textarea[contains(@id,'wsf-1-field-84')]","Dirección demo tres")

        //Checkbox
        await FG.Click("//label[contains(@id,'wsf-1-label-85-row-1')]")
        await FG.Click("//label[contains(@id,'wsf-1-label-86-row-3')]")

        //Combo
        await FG.ComboIndex("//select[contains(@id,'wsf-1-field-87')]",1)
        await FG.ComboIndex("//select[contains(@id,'wsf-1-field-89')]",1)

        //Calendarios
        await FG.Click("//input[contains(@id,'wsf-1-field-91')]")
        await FG.Click("(//div[contains(.,'10')])[23]")

        await FG.Click("//input[contains(@id,'wsf-1-field-92')]")
        await FG.Click("(//div[contains(.,'16')])[18]")

        //Upload File
        await FG.Upload("//input[contains(@id,'wsf-1-field-94')]","C:\\WEBDRIVER_MASTER\\ProyectoCurso\\path\\to\\new\\project\\img\\perro1.jpg")


        
        await FG.Click("//button[contains(@id,'wsf-1-field-93')]")

        await FG.Validar_texto("//p[contains(.,'Gracias por tu encuesta.')]","Gracias por tu encuesta.")
        






        await browser.pause(t)
    });
});