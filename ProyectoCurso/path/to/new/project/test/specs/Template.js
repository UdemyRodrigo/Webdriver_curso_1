const FG=require('./page/Funciones2');
describe('', () => {
    //Variables Globales
    let t=2000

    
    it('', async () => {
        await browser.url('/')
        await browser.maximizeWindow()
        await browser.pause(2000)
        //Assert title
        await expect(browser).toHaveTitle('ToolsQA')
    });
});