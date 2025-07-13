import { chromium, Page } from "@playwright/test";
import { selectors } from "./locators";

export class LoginPage {

    lppage: Page

    // public selectors={
    //     "usernameField":"#username",
    //     "passwordField":"#password",
    //     "login_logout":"decorativeSubmit",
    //     "crmLink":"text=CRM/SFA",
    //     "LeadMod":`//a[text()='Leads']`
    // }

    constructor(lpage: Page) { // parameterized constructor
        this.lppage = lpage
    }

    async loadurl(url: string) {
        await this.lppage.goto(url)
    }

    async enterCredentials(userName: string, password: string) {
        // await this.lppage.fill(this.selectors.usernameField, userName);
        // await this.lppage.fill(this.selectors.passwordField, password)
        await this.lppage.fill(selectors.usernameField, userName);
        await this.lppage.fill(selectors.passwordField, password)
    }

    async clickLogin() {
        await this.lppage.click(selectors.login_logout)

    }


}




//Create an object for the class to call all the methods


