class SistemaUno{
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
        bc.isEnabled()
        bc.isDisplayed()
        return bc.click(), browser.pause(ti);
    }

    async Validar_texto(sel,texto,ti=2000){
        let vt= await $(sel).getText()
        console.log("Título del Texto: " + vt)
        return expect(vt).toEqual(texto), browser.pause(ti);
    }

    async TestUno(nom,ap,email,tel,dir){
        this.open();
        await this.Texto("//input[@id='wsf-1-field-21']",nom)        
        await this.Texto("//input[@id='wsf-1-field-22']",ap)        
        await this.Texto("//input[@id='wsf-1-field-23']",email)        
        await this.Texto("//input[contains(@id,'wsf-1-field-24')]",tel)
        await this.Texto("//textarea[contains(@id,'wsf-1-field-28')]",dir)

        await this.Click("//button[contains(@id,'wsf-1-field-27')]")
        await this.Validar_texto("//p[contains(.,'Gracias por tu encuesta.')]","Gracias por tu encuesta.")
    }

    
}

module.exports= new SistemaUno();

