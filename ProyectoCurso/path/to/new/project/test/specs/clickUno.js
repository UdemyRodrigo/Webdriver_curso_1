describe('Elementos tipo click', () => {
    it('Demo uno click', async () => {
        await browser.url('https://demoqa.com/')
        await browser.maximizeWindow()
        await browser.pause(3000)
        //Assert title
        await expect(browser).toHaveTitle('ToolsQA')

        $("(//div[@class='card-up'])[1]").click()
        await  browser.pause(3000)

        $("//li[contains(.,'Text Box')]").click()
        await  browser.pause(3000)
    });

    it('Demo dos uno Dobleclick', async () => {
        await browser.url('https://demoqa.com/')
        await browser.maximizeWindow()
        await browser.pause(3000)
        //Assert title
        await expect(browser).toHaveTitle('ToolsQA')

        $("(//div[@class='card-up'])[1]").click()
        await  browser.pause(3000);

        let buton=  await  $("//li[contains(.,'Buttons')]");
        await  buton.scrollIntoView(); //Te mueve hacia el elemento
        await  browser.pause(3000);
        await  buton.click();
        await  browser.pause(3000);

        $("//button[@id='doubleClickBtn']").doubleClick()
        await  browser.pause(3000);
    });

   
    it('Demo tres isClickable', async () => {
        await browser.url('https://demoqa.com/')
        await browser.maximizeWindow()
        console.log("Maximizando")
        await browser.pause(1000)
        //Assert title
        await expect(browser).toHaveTitle('ToolsQA')
        console.log("Validando el titulo")

        $("(//div[@class='card-up'])[1]").click()
        await  browser.pause(1000);
        console.log("click primer buton")

        let buton=  await  $("//li[contains(.,'Check Box')]");
        let mb= await buton.isClickable();
        console.log("El boton es clickable: "+mb)

        if(mb==true){             
            await  buton.scrollIntoView(); //Te mueve hacia el elemento
            await  browser.pause(3000);
            console.log("scroll al elemento")
            await  buton.click();
            await  browser.pause(3000);
        }else{
            console.log("No se le puede dar Click")
        }
       
    });


    it('Demo tres waitForClickable', async () => {
        await browser.url('https://demoqa.com/')
        await browser.maximizeWindow()
        console.log("Maximizando")
        await browser.pause(1000)
        //Assert title
        await expect(browser).toHaveTitle('ToolsQA')
        console.log("Validando el titulo")

        $("(//div[@class='card-up'])[1]").click()
        await  browser.pause(1000);
        console.log("click primer buton")

        let buton=  await  $("//li[contains(.,'Check Boxxx')]");
        let mb= await buton.waitForClickable({timeout:15000, timeoutMsg:"No se encontro el Elemento"});
    });

    it.only('Demo click(x,y)', async () => {
        await browser.url('https://demoqa.com/')
        await browser.maximizeWindow()
        console.log("Maximizando")
        await browser.pause(1000)
        //Assert title
        await expect(browser).toHaveTitle('ToolsQA')
        console.log("Validando el titulo")

        $("(//div[@class='card-up'])[1]").click()
        await  browser.pause(1000);
        console.log("click primer buton")

        let buton=  await  $("//li[contains(.,'Check Box')]");
        await buton.click({x:0,y:-60});
        await browser.pause(5000)

    });


   



   



    
});