export const selectors={

        "usernameField":"#username",
        "passwordField":"#password",
        "login_logout":".decorativeSubmit",
        "crmLink":"text=CRM/SFA",
      //  "LeadMod":`//a[text()='Leads']`
        modName:(modName:string)=>`//a[text()='${modName}']`,
        Leads:{
            firstName:"#createLeadForm_companyName"
        },
        Accounts:{
           
        },

}