const FG=require('./page/Funciones2')

describe('Eventos Keys', () => {
    //Variables Globales
    let t=500 
    
    before(async () =>{
        console.log("Iniciando el Before")
        FG.open_arg("https://testingqarvn.com.es/datos-personales/","TDatos Personales | TestingQaRvn")
    })
    


    it('Primer Test Tab', async () => {

        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-21')]","Rodrigo")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-22')]","Villanueva")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-23')]","rodrigo@gmail.com")
        await browser.pause(1000)
    });

    it.only('Test  Keys Tab', async () => {

        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-21')]","Rodrigo")
        await FG.EjecutaKey("Tab").setValue("Villanueva")
        await FG.EjecutaKey("Tab").setValue("rodrigo@gmail.com")       
      
        await browser.pause(1000)
    });

   

   
});