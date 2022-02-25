const FG=require('./page/Funciones2');
const faker = require('faker');

describe('Practica For ciclos de Repetición', () => {
    //Variables Globales
    let tf=500
    let pruebas=4
    //let fname=faker.name.firstName();

    beforeEach(async () =>{
        console.log("Iniciando el Before en cada caso")
        await FG.open_arg("https://testingqarvn.com.es/datos-personales/","Datos Personales | TestingQaRvn")

    })

    
    it('Prueba uno For uno', async () => {
       //await FG.open_arg("https://testingqarvn.com.es/datos-personales/","Datos Personales | TestingQaRvn")

       for(i=1;i<=pruebas;i++){
         await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-21')]", faker.name.firstName())
         await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-22')]", faker.name.lastName())        
         await browser.pause(tf)
       }

     
    });

    it('Prueba dos Faker', async () => {
        //await FG.open_arg("https://testingqarvn.com.es/datos-personales/","Datos Personales | TestingQaRvn")

        for(i=1;i<=pruebas;i++){
         await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-21')]", faker.name.firstName())
         await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-22')]", faker.name.lastName())
         await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-23')]", faker.internet.email())
         await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-24')]", faker.phone.phoneNumber())
         await FG.Texto_Simple("//textarea[contains(@id,'wsf-1-field-28')]", faker.lorem.sentences())
        }
 
        
     });

     it('Prueba tres Faker', async () => {
        //await FG.open_arg("https://testingqarvn.com.es/datos-personales/","Datos Personales | TestingQaRvn")
        for(i=1;i<=pruebas;i++){
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-21')]", faker.random.number())
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-22')]", faker.random.float())
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-23')]", faker.internet.email())
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-24')]", faker.internet.password())
            await FG.Texto_Simple("//textarea[contains(@id,'wsf-1-field-28')]", faker.internet.url())
      
            await FG.Click("//button[contains(@id,'wsf-1-field-27')]")
         }
 
       
     });

     it('Prueba cuatro Faker', async () => {
        //await FG.open_arg("https://testingqarvn.com.es/datos-personales/","Datos Personales | TestingQaRvn")

        for(i=1;i<=pruebas;i++){
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-21')]", faker.name.firstName())
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-22')]", faker.name.lastName())
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-23')]", faker.internet.email())
            await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-24')]", faker.phone.phoneNumber())
            await FG.Texto_Simple("//textarea[contains(@id,'wsf-1-field-28')]", faker.address.streetAddress())
      
            await FG.Click("//button[contains(@id,'wsf-1-field-27')]")
      
            await FG.Validar_texto("//p[contains(.,'Gracias por tu encuesta.')]","Gracias por tu encuesta.")
      
            await browser.pause(tf)
        }

     });
});