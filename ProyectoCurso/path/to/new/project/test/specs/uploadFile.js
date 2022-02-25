const  path=require('path');
describe('UploadFiles', () => {
    //Variables Globales
    let t=2000

    
    it('Demo de uploadFile', async () => {
        await browser.url('https://demoqa.com/automation-practice-form')
        await browser.maximizeWindow()
        await browser.pause(2000)
        //Assert title
        await expect(browser).toHaveTitle('ToolsQA')

        let  ruta="C:/WEBDRIVER_MASTER/ProyectoCurso/path/to/new/project/img/perro1.jpg"
        let  remoteFile=await browser.uploadFile(ruta);

        $("//input[@id='uploadPicture']").scrollIntoView()
        await browser.pause(t)
        await $("//input[@id='uploadPicture']").setValue(remoteFile);
        await browser.pause(t)

    });

   
});