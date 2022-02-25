import Funciones from './page/base_function';

describe('Demo uno', () => {
    //Variables Globales
    let t=2000

    
    it.only('Prueba Snippets', async () => {

      await browser.url('http://demo.automationtesting.in/Register.html')
      await Funciones.open();
      

      await $("[placeholder='First Name']").setValue('Rodrigo')
  
    });

    it('Creando mi ScreenShot', async () => {
      await browser.url('http://demo.automationtesting.in/Register.html')
      await browser.maximizeWindow()
      await browser.pause(t)
      await expect(browser).toHaveTitle('Register')

      
      let name=await $("[placeholder='First Name']")
      await name.scrollIntoView();     
      name.setValue("Rodrigo")
      await browser.pause(t)
      await name.saveScreenshot('./ScreeShot/demoDos.png');
      await browser.pause(t)

      let ap=await $("//input[contains(@placeholder,'Last Name')]")
      await ap.scrollIntoView()
      ap.setValue('Villanueva')
      await browser.pause(t)
      await ap.saveScreenshot('./ScreeShot/Apellido_Paterno.png');
      await browser.pause(t)
  
    });

   

});