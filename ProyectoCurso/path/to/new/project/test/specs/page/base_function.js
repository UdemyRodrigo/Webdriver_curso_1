class FuncionesGlobales{
    open(){
        browser.url("https://testingqarvn.com.es/datos-personales/")
        browser.maximizeWindow()  
        expect(browser).toHaveTitle('Datos Personales | TestingQaRvn')   
    }

    Nombre(){
       return $("//input[contains(@id,'wsf-1-field-21')]").setValue('Rodrigo')
    }

    Texto(sel,val,ti=2000){
        let bt= $(sel)
        bt.scrollIntoView();
        return bt.setValue(val), browser.pause(ti);
    }

    Click(sel,ti=2000){
        let bc= $(sel)
        bc.scrollIntoView();
        bc.isClickable();
        return bc.click(), browser.pause(ti);
    }

    async Validar_texto(sel,texto,ti=2000){
        let vt= await $(sel).getText()
        console.log("Título del Texto: " + vt)
        return expect(vt).toEqual(texto), browser.pause(ti);
    }

    // htpts://webdriver.io/docs/pageobjects/
}

module.exports= new FuncionesGlobales();

