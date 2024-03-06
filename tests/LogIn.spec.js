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
    // await page.locator("#userEmail").fill(email);
    // await page.locator("#userPassword").fill("Iamking@000");
    // await page.locator("[value='Login']").click();
    // const email = "anshika@gmail.com";
    // const productName = 'ZARA COAT 3';
    // const products = page.locator(".card-body");
    // await page.waitForLoadState('networkidle');
    // const titles = await page.locator(".card-body b").allTextContents();
    // console.log(titles);
    // const counts = await products.count();
    // for (let i = 0; i < counts; ++i) {
    //     if (await products.nth(i).locator("b").textContent() === productName) {
    //         //add to cart
    //         await products.nth(i).locator("text= Add To Cart").click();
    //         break;
    //     }
    // }
    // await page.locator("[routerlink*='cart']").click();
    // //await page.pause(); 
    // await page.locator("div li").first().waitFor();
    // const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    // expect(bool).toBeTruthy();
    // await page.locator("text=Checkout").click();
    // await page.locator("[placeholder*='Country']").pressSequentially("ind");
    // const dropdown = page.locator(".ta-results");
    // await dropdown.waitFor();
    // const optionsCount = await dropdown.locator("button").count();
    // for (let i = 0; i < optionsCount; ++i) {
    //     const text = await dropdown.locator("button").nth(i).textContent();
    //     if (text === " India") {
    //         await dropdown.locator("button").nth(i).click();
    //         break;
    //     }
    // }

    // expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    // await page.locator(".action__submit").click();
    // await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    // const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    // console.log(orderId);
    await page.locator("[routerlink='/dashboard/myorders']").first().click();
    await page.locator("tbody tr").first().waitFor();
    const rows = await page.locator("tbody tr");
    // console.log(ids);
    const orderListSize = await page.locator("tbody tr").count();
    console.log(orderListSize);
    await page.pause();
    for (let i = 0; i < orderListSize; ++i) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        // console.log(text);
        if (reponse.orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(reponse.orderId.includes(orderIdDetails)).toBeTruthy();
    await page.getByTitle
});


