describe('ejercicios de Texto', () => {
    //Variables Globales
    let t=500

    it('Demo addValue', async () => {
        await browser.url('https://demoqa.com/text-box')
        await browser.maximizeWindow()
        await browser.pause(2000)
        //Assert title
        await expect(browser).toHaveTitle('ToolsQA')

        let banner=await  $("//div[@class='main-header'][contains(.,'Text Box')]").getText()
        console.log("El Banner dice: "+banner)
        await browser.pause(t) 

        if(banner=="Text Box")
        {
            await $("//input[@id='userName']").setValue("Rodrigo")
            await browser.pause(t) 
            await $("//input[@id='userEmail']").setValue("rodrigo@gmail.com")
            await browser.pause(t)
            await  $("//textarea[@id='currentAddress']").setValue("Dirección uno")
            await browser.pause(t)
            let dir2=  await  $("//textarea[@id='permanentAddress']");
            await  dir2.scrollIntoView();
            await  browser.pause(t)
            await  dir2.setValue("Dirección dos")
            await browser.pause(t)
            let buton=  await  $("//button[@id='submit']");
            await  buton.scrollIntoView();
            await  browser.pause(t)
            await  buton.click();
            await  browser.pause(t)
        }else{
            console.log("No es la Página")
        }
       
    });

   
});