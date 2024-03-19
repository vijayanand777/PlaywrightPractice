import { test, expect } from "@playwright/test";
import { POMManager } from "../PageObjects/POMManager";
// const Data = JSON.parse(JSON.stringify(require("../Utils/DataSet.json")));
import Data from "../Utils/DataSet.json";
// test.describe.configure({mode:'parallel'});
test.describe.configure({mode:'serial'});
 for ( const data of Data)
 {
test(`@Client App login for ${data.productName}`, async ({ page }) =>
{
   const pomManager=new POMManager(page);
   const logIn=pomManager.getLogInPage();
   await logIn.goTo();
   await logIn.validLogIn(data.email,data.password);
   const dashBoard=pomManager.getDashBoardPage();
   await dashBoard.searchProductAddCart(data.productName);
   const cartPage= pomManager.getCartPage();
   cartPage.VerifyProductaddedCart();
   cartPage.checkOut();
   expect(cartPage.asertionforProductVisibility()).toBeTruthy();
   const orderPage=pomManager.getOrderPage();
   await orderPage.enterAdress(data.CountryName,data.partialCountryName);
   const confirmationPage=pomManager.getConfirmationPage();
   await confirmationPage.placeOrder();
  await confirmationPage.verifyOrderDetails();
   await  confirmationPage.getOrderID();   
});
}
test("UI validations ", async ({ page }) =>
{
   await page.goto("https://www.google.com/");
   await expect(await page.screenshot()).toMatchSnapshot('screen.png');
    
});