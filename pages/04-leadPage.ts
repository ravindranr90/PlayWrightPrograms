
import { HomePage } from "./03-homePage";
import { selectors } from "./locators";


export class LeadPage extends HomePage{

    
async clickCreateLead(){
//await this.lppage.click(`//a[text()='Create Lead']`)
await this.lppage.click(selectors.modName('Create Lead'))
}

async clickMergeLead(){

}

async clickFindLead(){

}


}