//import { myfixture } from "./fixture";
import { test } from "./fixture";

//myfixture(`using custom fixture`,async ({page})=>{
test(`using custom fixture`,async ({page})=>{


console.log(await page.title());

    
})/* Note :

We are reducing the line of codes to use our own fixture

You are injecting the logic into your test function to the page

Use case is in the creation of object   */