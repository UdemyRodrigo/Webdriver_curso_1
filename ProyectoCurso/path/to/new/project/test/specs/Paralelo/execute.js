describe('Demo execute elements', () => {
    //Variables Globales
    let t=2000

    
    it('Demo execute Elementos', async () => {
        await browser.url('https://online2pdf.com/')
        await browser.maximizeWindow()
        await browser.pause(2000)
        //Assert title
        await expect(browser).toHaveTitle('Conversor PDF en línea - Combina PDFs y desbloquea PDF')

        await browser.execute("document.querySelector('#inputfile0').className='' ");
    });
});