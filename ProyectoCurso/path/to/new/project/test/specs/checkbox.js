describe('CheckBox y RadioButtons', () => {
    //Variables Globales
    let t=2000

    
    it('Demo uno', async () => {
        await browser.url('https://demoqa.com/automation-practice-form')
        await browser.maximizeWindow()
        await browser.pause(2000)
        //Assert title
        await expect(browser).toHaveTitle('ToolsQA')

        $("//label[.='Male']").click();
        await browser.pause(t)
        $("//label[.='Other']").click();
        await browser.pause(t)
        $("//label[.='Sports']").click();
        await browser.pause(t)
        $("//label[.='Music']").click();
        await browser.pause(t)
        $("//label[.='Music']").click();
        await browser.pause(t)


    });
});