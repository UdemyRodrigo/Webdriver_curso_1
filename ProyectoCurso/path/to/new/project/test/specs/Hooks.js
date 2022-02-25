const FG=require('./page/Funciones2')

describe('Creando la Práctica Dos POM', () => {
    //Variables Globales
    let t=200 
    /*
    before(async () =>{
        console.log("Iniciando el Before")
        FG.open_arg("https://testingqarvn.com.es/combobox/","ComboBox | TestingQaRvn")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-45')]","Juan")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-46')]","Villanueva")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-47')]","juan@gmail.com")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-48')]","55678978")
        await FG.Texto_Simple("//textarea[contains(@id,'wsf-1-field-49')]","Dirección demo dos")
    })
    */

    beforeEach(async () =>{
        console.log("Iniciando el Before en cada caso")
        FG.open_arg("https://testingqarvn.com.es/combobox/","ComboBox | TestingQaRvn")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-45')]","Juan")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-46')]","Villanueva")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-47')]","juan@gmail.com")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-48')]","55678978")
        await FG.Texto_Simple("//textarea[contains(@id,'wsf-1-field-49')]","Dirección demo dos")
        await browser.setWindowSize(1200,900)
        await browser.pause(2000)
       
    })



    it('Primer Test POM', async () => {
        //await FG.open_arg("https://testingqarvn.com.es/combobox/","ComboBox | TestingQaRvn")
       
        await browser.pause(t)
    });

    it('Segundo Test POM', async () => {
        //await FG.open_arg("https://testingqarvn.com.es/combobox/","ComboBox | TestingQaRvn")
        /*
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-45')]","Juan")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-46')]","Villanueva")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-47')]","juan@gmail.com")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-48')]","55678978")
        await FG.Texto_Simple("//textarea[contains(@id,'wsf-1-field-49')]","Dirección demo dos")
        */
        //Checkbox
        await FG.Click("//label[contains(@id,'wsf-1-label-50-row-2')]")
        await FG.Click("//label[contains(@id,'wsf-1-label-51-row-2')]")
        await browser.pause(t)
    });

    it('Tercer Test POM', async () => {
        //await FG.open_arg("https://testingqarvn.com.es/combobox/","ComboBox | TestingQaRvn")
        /*
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-45')]","Juan")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-46')]","Villanueva")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-47')]","juan@gmail.com")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-48')]","55678978")
        await FG.Texto_Simple("//textarea[contains(@id,'wsf-1-field-49')]","Dirección demo dos")
        */
        //Checkbox
        await FG.Click("//label[contains(@id,'wsf-1-label-50-row-2')]")
        await FG.Click("//label[contains(@id,'wsf-1-label-51-row-2')]")

        //Combo
        await FG.ComboIndex("//select[contains(@id,'wsf-1-field-53')]",1)
        await FG.ComboVisible("//select[contains(@id,'wsf-1-field-53')]","Windows")
        await FG.ComboVal("//select[contains(@id,'wsf-1-field-53')]","Mac")      

        await browser.pause(t)
    });

    it('Cuarto Test POM', async () => {
        //await FG.open_arg("https://testingqarvn.com.es/combobox/","ComboBox | TestingQaRvn")
        /*
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-45')]","Juan")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-46')]","Villanueva")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-47')]","juan@gmail.com")
        await FG.Texto_Simple("//input[contains(@id,'wsf-1-field-48')]","55678978")
        await FG.Texto_Simple("//textarea[contains(@id,'wsf-1-field-49')]","Dirección demo dos")
        */
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

    /*
    after(async() =>{
        console.log("############################################")
        console.log("Esto se ejecuta al final de todos los Procesos")
        console.log("############################################")
        await browser.setWindowSize(700,700)
        await browser.pause(4000)
    })
    */

    afterEach(async() =>{
        console.log("############################################")
        console.log("Esto se ejecuta al final de cada uno de los Procesos")
        console.log("############################################")
        await browser.setWindowSize(700,700)
        await browser.pause(2000)
    })


   
});