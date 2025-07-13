import { LoginPage } from "./01-loginPage";
import { selectors } from "./locators";


export class WelcomePage extends LoginPage{


    async clickCRM(){

        // await this.lppage.locator(this.selectors.crmLink).click()
         await this.lppage.locator(selectors.crmLink).click()
  }

      async clickLogout(){
        await this.lppage.locator(selectors.login_logout).click()
    }
}