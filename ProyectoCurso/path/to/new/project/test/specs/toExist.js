describe('Matchers', () => {
    it('IsEnabled Boton Habilitado', async () => {
        await browser.url("https://demoqa.com/buttons")
        await browser.maximizeWindow()
        await browser.pause(2000)

        //Assert title
        await expect(browser).toHaveTitle("ToolsQA")

        let boton =  await $('//button[text()="Click "]')
        let existe=  await boton.isExisting()
        console.log(existe)

        /*
        if (await expect(boton).toExist()=="exist")
            console.log("El boton existe")
        else
            console.log("El boton no existe")
        */

    });
        
    
});