const FG=require('./page/Funciones2');
const faker = require('faker');

describe('Práctica de Carga', () => {
    //Variables Globales
    //let tf=500
    //let pruebas=4
  

    
    it('Prueba uno Carga', async () => {

        for(let i=1; i<=3; i++)
        {
            await FG.open_arg("https://testingqarvn.com.es/datos-personales/","Datos Personales | TestingQaRvn")
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-21')]",faker.name.firstName())
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-22')]",faker.name.lastName())
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-23')]",faker.internet.email())

            await browser.pause(1000)
        }
    })

    it('Prueba dos Carga', async () => {

        for(let i=1; i<=3; i++)
        {
            await FG.open_arg("https://testingqarvn.com.es/datos-personales/","Datos Personales | TestingQaRvn")
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-21')]",faker.name.firstName())
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-22')]",faker.name.lastName())
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-23')]",faker.internet.email())
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-24')]",faker.phone.phoneNumber())            
            await browser.pause(1000)
        }
    })

    it('Prueba tres Carga', async () => {

        for(let i=1; i<=3; i++)
        {
            
            await FG.open_arg("https://testingqarvn.com.es/datos-personales/","Datos Personales | TestingQaRvn")
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-21')]",faker.name.firstName())
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-22')]",faker.name.lastName())
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-23')]",faker.internet.email())
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-24')]",faker.phone.phoneNumber())
            await FG.Texto_Simple("//textarea[contains(@id,'wsf-1-field-28')]",faker.address.streetAddress())
            await FG.Click("//button[contains(@id,'wsf-1-field-27')]")
            await FG.Validar_texto("//p[contains(.,'Gracias por tu encuesta.')]","Gracias por tu encuesta.")
            await browser.pause(1000)
        }
    })


});