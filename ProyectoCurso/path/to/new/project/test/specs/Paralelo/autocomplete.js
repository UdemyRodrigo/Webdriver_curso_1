describe('AutoComplete', () => {
    //Variables Globales
    let t=4000

    
    it('Demo uno autocomplete', async () => {
        await browser.url('https://demoqa.com/automation-practice-form')
        await browser.maximizeWindow()
        await browser.pause(2000)
        //Assert title
        await expect(browser).toHaveTitle('ToolsQA')

        let field=await $(".subjects-auto-complete__value-container")
        await field.doubleClick()
        await browser.pause(t)
        await field.setValueImmediate("Arts")        
        await browser.pause(t)
       

    });
});