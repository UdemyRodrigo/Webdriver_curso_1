let t=1000
class FG{

    open(){
        browser.url('https://testingqarvn.com.es/datos-personales/')
        browser.maximizeWindow()
        expect(browser).toHaveTitle('Datos Personales | TestingQaRvn')
    }

    open_arg(url,texto){
        browser.url(url)
        browser.maximizeWindow()
        expect(browser).toHaveTitle(texto)
    }

    /*
    Nombre(){
        return $("//input[@id='wsf-1-field-21']").setValue("Rodrigo")
    }
    */
   
    
    async Texto_Simple(sel,val,ti=t){
        let bt=await $(sel);
        await bt.waitForExist({ timeout: 8000 });
        return bt.setValue(val), browser.pause(ti)
    }
    
    async Texto_Simple_try(sel,val,ti=t){
        try{
            let bt=await $(sel);
            await bt.waitForExist({ timeout: 5000});
            await bt.waitForDisplayed({ timeout: 5000});
            await bt.waitForEnabled({ timeout: 5000});
            console.log("Estoy en la parte del Try")
            return  bt.setValue(val), await browser.pause(ti)
        }catch(err){
            console.log("No se encontro el elemento")
            console.log("No se encontro el elemento")
            console.log("No se encontro el elemento")
            return false
        }
    }
    

    
   
    async Texto_View(sel,val,ti=t){
        let bt=await $(sel);
        bt.scrollIntoView();
        return bt.setValue(val), browser.pause(ti)
    }

    Click(sel,ti=t){
        let bc= $(sel)
        bc.scrollIntoView()
        bc.isClickable() 
        bc.isEnabled()  
        bc.isDisplayed()  
        return bc.click(), browser.pause(ti)
    }

    async Validar_texto(sel,texto,ti=t){
        let vt= await $(sel).getText()
        console.log("Texto a Validar: " +vt)
        return expect(vt).toEqual(texto), browser.pause(ti)
    }

    async ComboIndex(sel,ind,ti=t){
        let com=await $(sel)
        com.selectByIndex(ind)
        await browser.pause(ti)
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

    async Upload(sel,ruta,ti=t){
        let r=ruta
        let remoteFile=await browser.uploadFile(r)
        $(sel).scrollIntoView()
        await browser.pause(ti)
        await $(sel).setValue(remoteFile)
    }

   
    
    
}

module.exports=new FG();