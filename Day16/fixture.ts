import {test as baseT} from "@playwright/test";
//import {test} from "@playwright/test";

export const test=baseT.extend({
// export const myfixture=baseT.extend({
    page:async({browser},use)=>{ // here page is userdefined
        const page = await browser.newPage()
        await page.goto("https://www.google.com/")
        await use(page)  // only when you have this line "use" can be used in test function
    }
})

/* Note:
Why override the default page?
By default, Playwright gives you a page that opens a blank tab. But maybe you want every test to automatically open Google before it runs.

So you're telling Playwright:

“, instead of giving me the default page, I want you to:

create a new page manually,

go to https://www.google.com/, and

then give that page to my tests.” */