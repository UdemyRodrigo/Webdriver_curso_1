let t=300
class FuncionesGlobales{
    open(){
        browser.url("https://testingqarvn.com.es/datos-personales/")
        browser.maximizeWindow()  
        expect(browser).toHaveTitle('Datos Personales | TestingQaRvn')   
    }

    open_arg(url,texto){
        browser.url(url)
        browser.maximizeWindow()  
        expect(browser).toHaveTitle(texto)   
    }

    

    Nombre(){
       return $("//input[contains(@id,'wsf-1-field-21')]").setValue('Rodrigo')
    }

    Texto_Simple(sel,val,ti=t){
        let bt= $(sel)
        return bt.setValue(val), browser.pause(ti);
    }

    Texto_Scroll(sel,val,ti=t){
        let bt= $(sel)
        bt.scrollIntoView();
        return bt.setValue(val), browser.pause(ti);
    }

    Click(sel,ti=t){
        let bc= $(sel)
        bc.scrollIntoView();
        bc.isClickable();
        bc.isEnabled()
        bc.isDisplayed()
        return bc.click(), browser.pause(ti);
    }

    async Validar_texto(sel,texto,ti=t){
        let vt= await $(sel).getText()
        console.log("Título del Texto: " + vt)
        return expect(vt).toEqual(texto), browser.pause(ti);
    }

    async ComboIndex(sel,ind,ti=t){
        let com=await $(sel)
        com.selectByIndex(ind)
        await browser.pause(ti)
    }

    async ComboVisible(sel,vis,ti=t){
        let com=await $(sel)
        com.selectByVisibleText(vis)
        await browser.pause(ti)
    }

    async ComboVal(sel,val,ti=t){
        let com=await $(sel)
        com.selectByAttribute("value",val)
        await browser.pause(ti)
    }

    async  Upload(sel,ruta,ti=t){
        let r=ruta
        let remoteFile=await browser.uploadFile(r)
        $(sel).scrollIntoView()
        await browser.pause(ti)
        await $(sel).setValue(remoteFile)
    }

    

   

    
}

module.exports= new FuncionesGlobales();

