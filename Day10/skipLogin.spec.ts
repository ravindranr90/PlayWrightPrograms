import test from "@playwright/test";


test.use({storageState:'data/login_LT.json'})
test(`Launch from homePage`,async({page})=>{
    await page.goto(`http://leaftaps.com/crmsfa/control/main`)
    console.log(await page.title())   
})