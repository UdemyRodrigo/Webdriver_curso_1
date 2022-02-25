describe('Demo uno', () => {
    //Variables Globales
    let tiempo=3000

    it('Creando mi ScreenShot', async () => {
      await browser.url('http://localhost/drupal1/')
      await browser.maximizeWindow()
      await browser.pause(tiempo)
      await expect(browser).toHaveTitle('Inicio | Demo rodrigo')

      await $("//a[@href='/drupal1/user/login']").click()
      await browser.pause(tiempo)

      await $("//input[@id='edit-name']").setValue('rodrigo2')
      await $("//input[@id='edit-pass']").setValue('Rorro131319++')
      await $("//input[contains(@name,'op')]").click()
      await browser.pause(tiempo)

      await $("//a[contains(@id,'toolbar-link-system-admin_content')]").click()
      await browser.pause(tiempo)
      await $("//a[@href='/drupal1/node/add'][contains(.,'Añadir contenido')]").click()
      await browser.pause(tiempo)
      await $("//span[@class='label'][contains(.,'Artículo')]").click()
      await browser.pause(tiempo)

      //titulo
      await $("//input[contains(@id,'edit-title-0-value')]").setValue('Demo 4')
      await browser.pause(tiempo)
      //await $("//input[@id='edit-field-direccion-0-value']").setValue('Demo del Texto')
      //await browser.pause(tiempo)
      await $("//input[@id='edit-submit']").click()
      await browser.pause(tiempo)


      
     
    });

   

});