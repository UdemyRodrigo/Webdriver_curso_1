describe('Buscar elemento', () => {
    //Variables Globales
    let t=2000

    
    it('Buscando el elemento $', async () => {
        await browser.url('http://demo.automationtesting.in/Register.html')
        await browser.maximizeWindow()
        await browser.pause(2000)
        //Assert title
        await expect(browser).toHaveTitle('Register')

        let name=await $("//h1[contains(.,'Automation Demo Site')]").getText()
        console.log("Título de la Página: " + name)

        await expect(name).toEqual("Automation Demo Site")


    });
});