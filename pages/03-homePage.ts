import { WelcomePage } from "./02-welcomePage";
import { selectors } from "./locators";


export class HomePage extends WelcomePage {


    async clickLead() {
        // await this.lppage.click(selectors.LeadMod)
        await this.lppage.click(selectors.modName('Leads'))
    }

    async clickAccounts() {
        //   await this.lppage.click("//a[text()='Accounts']")
        await this.lppage.click(selectors.modName('Accounts'))
        await this.lppage.waitForTimeout(5000)

    }

    async clickContacts() {
        // await this.lppage.click("//a[text()='Contacts']")
        await this.lppage.click(selectors.modName('Contacts'))
    }

    async clickOpportunities() {
       // await this.lppage.click("//a[text()='Opportunities']")
        await this.lppage.click(selectors.modName('Opportunities'))

    }


}