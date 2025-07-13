import { test } from "@playwright/test";
import { ViewLeadPage } from "../../pages/06-viewLeadPage";

import Logindata from "../../Data/login.json"

import dotenv from 'dotenv'
dotenv.config({path:"data/prod.env"})

 test(`CreateLead verification`, async({page})=>{

    const vp = new ViewLeadPage(page)
    await vp.loadurl(process.env.Baseurl as string);
    await vp.enterCredentials(Logindata[0].Username,Logindata[0].Password);
    await vp.clickLogin()
    await vp.clickCRM()
    await vp.clickLead()
    await vp.clickCreateLead()
    await vp.enterMandatorydetails()
    await vp.clickSubmit()
    await vp.verifyFirstName()


})


