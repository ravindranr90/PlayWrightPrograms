import { test } from "@playwright/test";
import { LoginPage } from "../pages/01-loginPage";

test(`Login verification`,async ({page}) => {

    const login = new LoginPage(page)
    await login.loadurl(`http://leaftaps.com/opentaps/control/main`)
    await login.enterCredentials("demoCSR","crmsfa")
    await login.clickLogin()

})


    /* Using fixture to create an object and execute the test */
// import { test } from "../utils/customFixture";

//     test(`Login verification`,async ({login}) => {

//         console.log("Login is succesfull");
        
        
//     })