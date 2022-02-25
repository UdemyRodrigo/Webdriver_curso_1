describe('Demo de Waits', () => {
    //Variables Globales
    let t=2000

    
    it('Wait', async () => {
        await browser.url('https://demoqa.com/modal-dialogs')
        await browser.maximizeWindow()
        await browser.pause(2000)
        //Assert title
        await expect(browser).toHaveTitle('ToolsQA')

        /*
        let buton= await  $("//button[@id='showSmallModal']");
        await buton.waitForDisplayed({ timeout: 8000 }).then(function() {
            console.log("El boton es ckick")
            buton.doubleClick()
        });
       */
        await $("#showSmallModal").click()

    });
});