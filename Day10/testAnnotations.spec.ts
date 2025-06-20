import test, { expect } from '@playwright/test'

//will not execute for now before the environment is ready
/* test.skip(`Test annotations with skip cause test not suitable for environment`,async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
}) */

//Purpose :
// Test not ready, environment not suitable
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* test.fixme(`Test annotations with fixme`,async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
}) */
//will skip the test during execution, test.fixme means your telling your team that the QA/test script needs to be fixed — 
// not the developer's application code.

/* It will skip the test during execution.
But it serves as a reminder to fix that test.
It's useful when you know the test isn't working as expected 
(e.g., flaky, outdated, or needs to be updated after app changes).

Purpose : 
Your testscript is flaky or not working; under repair
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* test.fail(`Bug #123: Unable to click submit button`,async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR123")
await page.fill("#password","crmsfa")
await expect(page.locator("#decorativeSubmit")).toBeVisible();
await page.click("#decorativeSubmit")
}) */

/* Purpose:
It helps you:
Application has a bug, test shows the bug clearly.
Track bugs or known issues in the application. Here the unable to locate the submit button.
Keep the test in the suite, so it still runs.
Mark the test as “expected to fail” until the bug is fixed. */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//based on the condition double the timout condition using slow()nfor the entire test execution
test(`Test annotations with slow`,async({page,browserName})=>{
test.slow() //general config to double the test timeout
test.slow(browserName=='webkit','the test will be slow in webkit')// to double timeout  120 sec specific to the condition
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR",{timeout:5000})  //action timeout
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})

