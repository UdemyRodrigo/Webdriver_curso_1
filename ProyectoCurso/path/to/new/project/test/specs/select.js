describe('Ejemplos Combos', () => {
    //Variables Globales
    let t=5000

    
    it('Select for Index', async () => {
        await browser.url('https://testpages.herokuapp.com/styled/basic-html-form-test.html')
        await browser.maximizeWindow()
        await browser.pause(2000)
        //Assert title
        await expect(browser).toHaveTitle('HTML Form Elements')

        let combo= await $("//select[@name='dropdown']")
        combo.selectByIndex(1)
        await browser.pause(t)
        console.log("Valor del combo Seleccionado: "+await combo.getValue());
        await browser.pause(t)

        combo.selectByIndex(2)
        await browser.pause(t)
        console.log("Valor del combo Seleccionado: "+await combo.getValue());
        await browser.pause(t)

        combo.selectByIndex(4)
        await browser.pause(t)
        console.log("Valor del combo Seleccionado: "+await combo.getValue());
        await browser.pause(t)
    });

    it('Select for Texto', async () => {
        await browser.url('https://testpages.herokuapp.com/styled/basic-html-form-test.html')
        await browser.maximizeWindow()
        await browser.pause(2000)
        //Assert title
        await expect(browser).toHaveTitle('HTML Form Elements')

        let combo= await $("//select[@name='dropdown']")
        combo.selectByIndex(1)
        await browser.pause(t)
        console.log("Valor del combo Seleccionado: "+await combo.getValue());
        await browser.pause(t)

        combo.selectByIndex(2)
        await browser.pause(t)
        console.log("Valor del combo Seleccionado: "+await combo.getValue());
        await browser.pause(t)

        combo.selectByVisibleText("Drop Down Item 6")
        await browser.pause(t)
        console.log("Valor del combo Seleccionado: "+await combo.getValue());
        await browser.pause(t)
    });

    it('Select for Atribute', async () => {
        await browser.url('https://testpages.herokuapp.com/styled/basic-html-form-test.html')
        await browser.maximizeWindow()
        await browser.pause(2000)
        //Assert title
        await expect(browser).toHaveTitle('HTML Form Elements')

        let combo= await $("//select[@name='dropdown']")
       
        combo.selectByIndex(1)
        await browser.pause(t)
        console.log("Valor del combo Seleccionado: "+await combo.getValue());
        await browser.pause(t)

        combo.selectByIndex(5)
        await browser.pause(t)
        console.log("Valor del combo Seleccionado: "+await combo.getValue());
        await browser.pause(t)

        combo.selectByAttribute("selected","selected")
        await browser.pause(t)
        console.log("Valor del combo Seleccionado: "+await combo.getValue());
        await browser.pause(t)
    });

    it('Select Multi', async () => {
        await browser.url('https://testpages.herokuapp.com/styled/basic-html-form-test.html')
        await browser.maximizeWindow()
        await browser.pause(2000)
        //Assert title
        await expect(browser).toHaveTitle('HTML Form Elements')

        let combo= await $("//option[contains(.,'Selection Item 2')]")

        await $("//option[contains(.,'Selection Item 4')]").click()
        await browser.pause(t)

        await $("//option[contains(.,'Selection Item 1')]").click()
        await browser.pause(t)
        await $("//option[contains(.,'Selection Item 3')]").click()
        await browser.pause(t)
       

        
    });

    it.only('Reto Selectores', async () => {
        await browser.url('https://demoqa.com/automation-practice-form')
        await browser.maximizeWindow()
        await browser.pause(2000)
        //Assert title
        await expect(browser).toHaveTitle('ToolsQA')

        await $("//label[.='Sports']").scrollIntoView();
        
        let combo1=await $("#state")
        combo1.scrollIntoView();
        combo1.click();
        await browser.pause(t)
        combo1.click({x:0, y:150})
        await browser.pause(t)

        
    });

   

    

    
});