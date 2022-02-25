const FG=require('./page/Funciones2');
const faker = require("faker")
 

describe('Demo de las pruebas Aleatorias', () => {
    //Variables Globales
    let t=2000

    beforeEach(async () =>{
        console.log("Iniciando el Before en cada caso")
        FG.open_arg("https://testingqarvn.com.es/datos-personales/","Datos Personales | TestingQaRvn")
    })

    it('Demo Faker uno', async () => {
        //await FG.open_arg("https://testingqarvn.com.es/datos-personales/","Datos Personales | TestingQaRvn")
        //Assert title

        
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-21')]",faker.name.findName())
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-22')]",faker.name.lastName())
       
        
    });

    it('Demo Faker dos', async () => {
        //await FG.open_arg("https://testingqarvn.com.es/datos-personales/","Datos Personales | TestingQaRvn")
        //Assert title

        
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-21')]",faker.name.findName())
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-22')]",faker.name.lastName())
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-23')]",faker.internet.email())
       
        
    });

    it('Demo Faker tres', async () => {
        //await FG.open_arg("https://testingqarvn.com.es/datos-personales/","Datos Personales | TestingQaRvn")
        //Assert title

        
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-21')]",faker.name.findName())
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-22')]",faker.name.lastName())
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-23')]",faker.internet.email())
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-24')]",faker.phone.phoneNumber())
        await FG.Texto_Simple("//textarea[contains(@id,'wsf-1-field-28')]",faker.address.streetAddress())

     
        
    });

    it('Demo Faker cuatro', async () => {
        //await FG.open_arg("https://testingqarvn.com.es/datos-personales/","Datos Personales | TestingQaRvn")
        //Assert title

        
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-21')]",faker.name.findName())
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-22')]",faker.name.lastName())
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-23')]",faker.internet.email())
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-24')]",faker.phone.phoneNumber())
        await FG.Texto_Simple("//textarea[contains(@id,'wsf-1-field-28')]",faker.address.streetAddress())

        await FG.Click("//button[contains(@id,'wsf-1-field-27')]")
        await FG.Validar_texto("//p[contains(.,'Gracias por tu encuesta.')]","Gracias por tu encuesta.")

        await browser.pause(4000)
        
    });
});