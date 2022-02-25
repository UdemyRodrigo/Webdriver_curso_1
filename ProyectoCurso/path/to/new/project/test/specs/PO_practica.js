const FG=require('./page/Funciones');
const SIS=require('./page/Sistema_uno');




describe('Demo de la Práctica de POM', () => {
    //Variables Globales
    let tiempo=1500
    it('Cargando nuestro primer TEST', async () => {
        
        FG.open();
        await FG.Texto("//input[@id='wsf-1-field-21']","Rodrigo")        
        await FG.Texto("//input[@id='wsf-1-field-22']","Villanueva")        
        await FG.Texto("//input[@id='wsf-1-field-23']","rodrigo@gmail.com")        
        await FG.Texto("//input[contains(@id,'wsf-1-field-24')]","57898765")
        await FG.Texto("//textarea[contains(@id,'wsf-1-field-28')]","Demo de la Dirección")
        await FG.Click("//button[contains(@id,'wsf-1-field-27')]")

        await FG.Validar_texto("//p[contains(.,'Gracias por tu encuesta.')]","Gracias por tu encuesta.")


        await browser.pause(3000)
        
    });

    it('Prueba POM Por Sistema', async () => {
        await SIS.TestUno("Juan","Perez","juan@gmail.com","435345","Dirección demo Dos")
    });

    it('Prueba POM Por Sistema Dos', async () => {
        await SIS.TestUno("Erika","Paz","erika@gmail.com","43545345","Dirección demo Tres")
    });

   

   
});