

describe('Switch Windows', () => {
    //Variables Globales
    let t=2000
    browser.addCommand("EsperarClick", function (element){
        element.waitForExist()
        element.waitForDisplayed()
        element.click()
    })

    
    it('demo de Cambio de ventana', async () => {
        await browser.url('http://demo.automationtesting.in/Windows.html')
        await browser.maximizeWindow()
        await browser.pause(t)
        await expect(browser).toHaveTitle('Frames & windows')

        console.log("Página de Inicio: "+ await browser.getTitle())

        let buton=await $("(//button[contains(.,'click')])[1]")
        await buton.scrollIntoView();

        //await $("(//button[contains(.,'click')])[1]").click()

        await browser.EsperarClick(buton)

        await browser.pause(t)

        await browser.switchWindow("Selenium")

        console.log("Segunda página: "+ await browser.getTitle())

        await browser.pause(t)

        await $("//span[contains(.,'Documentation')]").click()

        await browser.pause(t)

        await browser.switchWindow("Frames & windows")
        await browser.pause(t)
        await browser.closeWindow()

        await browser.pause(5000)
  
    });

  

   

});