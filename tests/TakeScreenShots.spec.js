const { test,expect } = require("@playwright/test");

test("take Screen for full page", async({page}) =>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await  page.locator("#hide-textbox").click();
    expect(await page.locator("#displayed-text").isHidden());
    await page.screenshot({path: 'screenshot.png'});
    await page.locator("#show-textbox").click();
    expect(await page.locator("#displayed-text").isVisible()); 
    await page.locator("#displayed-text").screenshot({path:"elementscreenshot.png"});

});
test.only("take Screen for full pages", async({page}) =>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   
    expect(await page.screenshot()).toMatchSnapshot("screenshot.png");

});