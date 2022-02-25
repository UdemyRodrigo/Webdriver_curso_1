describe('Primer Practica Completa', () => {
    //Variables Globales
    let t=100

    it('Sección uno', async () => {
        await browser.url('http://demo.automationtesting.in/Register.html')
        await browser.maximizeWindow()
        await browser.pause(1000)
        //Assert title
        await expect(browser).toHaveTitle('Register')

        await $("[placeholder='First Name']").setValue("Rodrigo")
        await browser.pause(t)
        await $("[placeholder='Last Name']").setValue("Villanueva")
        await browser.pause(t)
        await $("textarea").setValue("Demo del Texto")
        await browser.pause(t)
        await $("[type='email']").setValue("rodrigo@gmail.com")
        await browser.pause(t)
    });

    it('Sección dos', async () => {
        await browser.url('http://demo.automationtesting.in/Register.html')
        await browser.maximizeWindow()
        await browser.pause(1000)
        //Assert title
        await expect(browser).toHaveTitle('Register')

        await $("[type='tel']").setValue("57961978")
        await browser.pause(t)
        await $("[value='Male']").click()
        await browser.pause(t)
        await $("[value='Movies']").click()
        await browser.pause(t)
        await $("//div[contains(@id,'msdd')]").scrollIntoView()
        await $("//div[contains(@id,'msdd')]").click()
        await browser.pause(t)
        await $("//div[contains(@id,'msdd')]").click({x:0,y:50})
        await browser.pause(t)
        
    });


    it('Sección tres', async () => {
        await browser.url('http://demo.automationtesting.in/Register.html')
        await browser.maximizeWindow()
        await browser.pause(1000)
        //Assert title
        await expect(browser).toHaveTitle('Register')

        let combo1=await $("//select[@id='Skills']")
        await combo1.scrollIntoView();
        await combo1.selectByIndex(2);
        await browser.pause(t)

        let pais=await $("//span[contains(@role,'combobox')]")
        await pais.scrollIntoView();
        await pais.click()
        await browser.pause(t)
        await pais.click({x:0,y:90})
        await browser.pause(t)

        let an=await $("#yearbox")
        await an.scrollIntoView();
        await an.selectByIndex(2);
        await browser.pause(t)

        let mes=await $("[placeholder='Month']")
        await mes.scrollIntoView();
        await mes.selectByIndex(2);
        await browser.pause(t)

        let dia=await $("#daybox")
        await dia.scrollIntoView();
        await dia.selectByIndex(2);
        await browser.pause(t)
        
    });

    it('Sección cuatro', async () => {
        await browser.url('http://demo.automationtesting.in/Register.html')
        await browser.maximizeWindow()
        await browser.pause(1000)
        //Assert title
        await expect(browser).toHaveTitle('Register')

       await $("#firstpassword").setValue("123456")
       await $("#secondpassword").setValue("123456")
       await browser.pause(t)

       //Cargando el archivo
       let  ruta="C:/WEBDRIVER_MASTER/ProyectoCurso/path/to/new/project/img/perro1.jpg"
       let  remoteFile=await browser.uploadFile(ruta);

       $("#imagesrc").scrollIntoView()
       await browser.pause(t)
       await $("#imagesrc").setValue(remoteFile);
       await browser.pause(3000)
        
    });
    
});
