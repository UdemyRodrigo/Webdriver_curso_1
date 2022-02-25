describe('Matchers', () => {
    it('IsEnabled Boton Habilitado', async () => {
        await browser.url("https://demoqa.com/buttons")
        await browser.maximizeWindow()
        await browser.pause(2000)

        //Assert title
        await expect(browser).toHaveTitle("ToolsQA")

        let boton =  await $('//button[text()="Click Me"]')
        let EstaOk= await  boton.isEnabled();
        console.log("El estado del boton: "+EstaOk); //True
        await browser.pause(2000)

        if (EstaOk==true)
            {
            console.log("El bóton esta Habilitado")
            boton.click();
            await browser.pause(5000)

            }
        else
            {
            console.log("El bóton esta inHabilitado")
            await browser.url("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_button_disabled")
            }
        
    });

    it.only('IsEnabled Boton inHabilitado', async () => {
        await browser.url("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_button_disabled")
        await browser.maximizeWindow()
        await browser.pause(2000)

        //Assert title
        await expect(browser).toHaveTitle("Tryit Editor v3.7")


        await browser.switchToFrame(1)
        await browser.pause(4000)
        let boton =  await $('//button[text()="Click Me!"]')
        let EstaOk= await  boton.isEnabled();
        console.log("El estado del boton: "+EstaOk); //false
        await browser.pause(4000)

        if (EstaOk==true)
        {
        console.log("El bóton esta Habilitado")
        boton.click();
        await browser.pause(5000)

        }
        else
        {
        console.log("El bóton esta inHabilitado")
        await browser.url("https://demoqa.com/buttons")
        await browser.pause(5000)
        }

        
    });
    
});