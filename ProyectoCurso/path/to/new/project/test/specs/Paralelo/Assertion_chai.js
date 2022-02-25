describe('Assertion Demos', () => {
    //Variables Globales
    let t=2000

    
    it('Assertion toHaveUrl ', async () => {
        await browser.url('http://demo.automationtesting.in/Register.html')
        await browser.maximizeWindow()
        await browser.pause(2000)

         //Assert title
         await expect(browser).toHaveTitle('Register')

         //Assert chai
           await expect(browser).toHaveUrl('http://demo.automationtesting.in/Register.html'); 
    });

    it('Assertion .not.toBeDisplayed ', async () => {
        await browser.url('http://demo.automationtesting.in/Register.html')
        await browser.maximizeWindow()
        await browser.pause(2000)

         //Assert title
         await expect(browser).toHaveTitle('Register')

         //Assert chai
         await expect(browser).toHaveUrl('http://demo.automationtesting.in/Register.html'); 
        
         //No se encuentra
         await expect($("#elementt")).not.toBeDisplayed(); //ok

         //Error
         await expect($("//input[@placeholder='First Name']")).not.toBeDisplayed(); //espera el not
         
    });

    it('Assertion .to.equal ', async () => {
        await browser.url('http://demo.automationtesting.in/Register.html')
        await browser.maximizeWindow()
        await browser.pause(2000)

         //Assert title
         await expect(browser).toHaveTitle('Register')

         let titulo=await $("//h2[contains(.,'Register')]").getText();

         expect(titulo).toEqual("Register");   
    });

    it.only('Assertion Diferencia If con Assertion .to.equal ', async () => {
        await browser.url('http://demo.automationtesting.in/Register.html')
        await browser.maximizeWindow()
        await browser.pause(2000)

         //Assert title
         await expect(browser).toHaveTitle('Register')

         let titulo=await $("//h2[contains(.,'Register')]").getText();

         /*
         if(titulo=="Regist"){
             console.log("Se encontro")
         }
         else{
             console.log("No se encontro")
         }
         */

         expect(titulo).toEqual("Register");   
  
    });

   
});