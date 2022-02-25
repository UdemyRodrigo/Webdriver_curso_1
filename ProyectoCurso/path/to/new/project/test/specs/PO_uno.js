const { Validar_texto } = require('./page/base_function');
const FuncionesGlobales = require('./page/base_function');

describe('Page Object Model', () => {
    let t=500;

    it('Primer Prueba Hola mundo', async () => {
        //await browser.url("https://testingqarvn.com.es/datos-personales/")     
        FuncionesGlobales.open();
        await browser.pause(t)
        await Validar_texto("//h2[contains(.,'Datos Personales Básicos')]","Datos Personales Básicos")
        await FuncionesGlobales.Texto("//input[@id='wsf-1-field-21']","Rodrigo")
        await browser.pause(t)
        await FuncionesGlobales.Texto("//input[@id='wsf-1-field-22']","Villanueva");
        await FuncionesGlobales.Texto("//input[@id='wsf-1-field-23']","rodrigo@gmail.com")
        await FuncionesGlobales.Texto("//input[@id='wsf-1-field-24']","6567556");
        await FuncionesGlobales.Texto("//textarea[@id='wsf-1-field-28']","Demo de la Dirección")
        await FuncionesGlobales.Click("//button[@id='wsf-1-field-27']",2000)


        
               
    });
    
    

  
});
