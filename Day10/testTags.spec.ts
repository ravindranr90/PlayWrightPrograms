import test from '@playwright/test'

test(`test 1`,{tag:['@smoke','@regression']},async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})




test(`test 2`,{tag:'@regression'},async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})


/* Locally in terminal command :
 npx playwright test -g '@smoke'
 npx playwright test -g '@regression' '@smoke'
  npx playwright test -g '@regression'|'@smoke'  */
/* You can globally set tags in config file :

grep:[/smoke/,/regression/], //categories the test execution "grep" basically looks for similar value in your test script not your filename alone.
use :{

}
 */

/* testMatch:'day10/fileHandler.spec.ts */