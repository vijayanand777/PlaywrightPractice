const { test, expect, request } = require('@playwright/test');
const {ApiData}=require("../Utils/ApiData");
let reponse;
test.beforeAll("grab access Token", async () => {
    const loginPayload = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" };
    const orderCreationPayload={orders: [{country: "India", productOrderedId: "6581ca979fd99c85e8ee7faf"}]};
    const apicall = await request.newContext();
   const  data=new ApiData(apicall,loginPayload );
   reponse=await data.createOrder(orderCreationPayload); 
});
test('@Client App login', async ({ page }) => {
    //js file- Login js, DashboardPage
    page.addInitScript( value =>
    {
window.localStorage.setItem('token',value);
    },reponse.token)
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("[routerlink='/dashboard/myorders']").first().click();
    await page.locator("tbody tr").first().waitFor();
    const rows = await page.locator("tbody tr");   
    const orderListSize = await page.locator("tbody tr").count();
    for (let i = 0; i < orderListSize; ++i) {
        const rowOrderId = await rows.nth(i).locator("th").textContent(); 
        if (reponse.orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(reponse.orderId.includes(orderIdDetails)).toBeTruthy();
    await page.getByTitle
});


