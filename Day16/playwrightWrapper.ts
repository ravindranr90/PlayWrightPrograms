import test, {Page,BrowserContext  } from "@playwright/test";

export abstract class PWWrapper{

    page:Page
    context:BrowserContext

    constructor(page:Page){
        this.page=page
    }
    async typeAndTab(locator:string,data:string){
        await this.page.fill(locator,data)
        await this.page.press(locator,'Tab')
    }
//Note here 2 actions you dont need to expand the logic you can put it here

async clearandType(locator: string, data: string, name: string) {
    try {
        await test.step(`Clear the field and enter with ${data} in ${name}`, async () => {
            const ele = this.page.locator(locator)
            await ele.clear()
            await ele.fill(data)
        })
    } catch (error) {
        console.log(error)
    }
}


//Here I can get this 2 actions that is clear and fill to be done using clearand Type method in 01-loginPage.ts using extends keyword
    //For window handling you have a big logic to handle this can be wriitem here 

    async handleWindow(locator:string):Promise<Page>{
        const handle=this.context.waitForEvent('page')
        this.page.locator(locator).click()
        const promise= await handle
        return promise

    }
}