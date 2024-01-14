import test, { expect } from "@playwright/test";

test.describe(`Salesforce login - generate storage state`,async()=>{

    test(`Login to salesforce`,async({page})=>{
        
        await page.goto("https://login.salesforce.com/")
        await page.locator("#username").fill("ranjini.r@testleaf.com")
        await page.locator("#password").fill("Testleaf$1234")
        await page.locator("#Login").click()
        
        const appLauncherLocator = page.locator(".slds-icon-waffle")
        await expect(appLauncherLocator).toBeVisible({timeout:10000})

        await page.context().storageState({path:"sfauth.json"})
    })
})