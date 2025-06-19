import test from '@playwright/test'



test.describe(`Groups`, ()=>{
 test.describe.configure({mode:"serial",timeout:6000})

 // Mark all tests in this block as slow (double timeout)
 // test.slow(); // General slowdown for all browsers

  // Conditionally slow down only for WebKit
 // test.slow(({ browserName }) => browserName === 'webkit', 'WebKit is slower');

test(`Group1`,async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})

test(`Group2  `,async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})


test(`Group3  `,async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})

})


/* You can globally set parallel mode in config file :
 */