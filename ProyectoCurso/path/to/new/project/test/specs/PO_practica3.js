const FG=require('./page/Funciones');

describe('Demo de la Práctica de POM', () => {
    //Variables Globales
    let tiempo=1500
    it('Cargando nuestro segundo con POM TEST', async () => {
        
        FG.open_arg("https://testingqarvn.com.es/upload-files/","Upload Files | TestingQaRvn");
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-80')]","Rodrigo")        
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-81')]","Villanueva")        
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-82')]","rodrigo@gmail.com")        
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-83')]","57898765")
        await FG.Texto_Simple("//textarea[contains(@id,'wsf-1-field-84')]","Demo de la Dirección")
        
        
        //checkbox
        await FG.Click("//label[contains(@id,'wsf-1-label-85-row-2')]")
        await FG.Click("//label[contains(@id,'wsf-1-label-86-row-3')]")
        

        //Combo
        await FG.ComboIndex("//select[contains(@id,'wsf-1-field-87')]",1)
        await FG.ComboIndex("//select[contains(@id,'wsf-1-field-87')]",2)

        //Evento uno
        await FG.Click("//input[contains(@id,'wsf-1-field-91')]")
        await FG.Click("(//div[contains(.,'18')])[9]")

        //Calendario
        await FG.Click("//input[contains(@id,'wsf-1-field-92')]")
        await FG.Click("(//div[contains(.,'18')])[18]")

        //Upload
        await FG.Upload("//input[contains(@id,'wsf-1-field-94')]","C:/WEBDRIVER_MASTER/ProyectoCurso/path/to/new/project/img/perro1.jpg")
        
        //click
        await FG.Click("//button[@id='wsf-1-field-93']")

        //Validar
        await FG.Validar_texto("//p[contains(.,'Gracias por tu encuesta.')]","Gracias por tu encuesta.")
        await browser.pause(3000)

        
        
        
    });
});