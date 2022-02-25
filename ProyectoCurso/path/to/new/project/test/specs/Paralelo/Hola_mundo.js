describe('Bienvenido a WebdriverIO', () => {
    it('Primer Prueba Hola mundo', async () => {
        await browser.url('/')
        browser.maximizeWindow()
        browser.pause(3000)

        //Assert title
        await expect(browser).toHaveTitle('ToolsQA')
    });

    it('Segundo Ejercicio toHaveURL ',  async () => {
        await browser.url("https://demoqa.com/elements")
        browser.maximizeWindow()
        browser.pause(5000)

        //Assert
        await expect(browser).toHaveUrl('https://demoqa.com/elements')
        
    });


    it('Segundo Ejercicio toHaveUrlContaining ',  async () => {
        await browser.url("https://demoqa.com/elements")
        browser.maximizeWindow()
        browser.pause(5000)

        //Assert
        await expect(browser).toHaveUrlContaining('demoqa.com')
        
    });

    it('Segundo Ejercicio toHaveTitleContaining ',  async () => {
        await browser.url("https://demoqa.com/elements")
        browser.maximizeWindow()
        browser.pause(5000)

        //Assert
        await expect(browser).toHaveTitleContaining('ToolsQA')
        
    });

    it('Segundo Ejercicio toHaveTitleContaining OK ',  async () => {
        await browser.url("https://demoqa.com/elements")
        browser.maximizeWindow()
        browser.pause(5000)

        //Assert
        await expect(browser).toHaveTitleContaining('Tools')
        
    });

   
    
});