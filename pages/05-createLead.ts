import { faker } from "@faker-js/faker";
import { LeadPage } from "./04-leadPage";
import { selectors } from "./locators";



export class CreateLeadPage extends LeadPage{

    async enterMandatorydetails(){

        await this.lppage.fill(selectors.Leads.firstName,faker.company.buzzNoun())
      //await this.lppage.fill("#createLeadForm_companyName",faker.company.buzzNoun())
  
        await this.lppage.fill("#createLeadForm_firstName",faker.person.firstName())
        await this.lppage.fill("#createLeadForm_lastName",faker.person.lastName())
    }

    async clickSubmit(){
        await this.lppage.click(".smallSubmit")
    }

}