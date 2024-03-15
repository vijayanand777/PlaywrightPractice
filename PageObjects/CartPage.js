class CartPage {
    constructor(page)
    {
        this.page = page;
        this.cartPage = page.locator("[routerlink*='cart']");
        this.productList= page.locator("div li");
        this.ProductName= page.locator("h3:has-text('zara coat 3')");
        this.CheckOut= page.locator("text=Checkout");
    }
    async VerifyProductaddedCart()
    {
        await this.cartPage.click();
        await this.productList.first().waitFor();        
    }
    async checkOut()
    {
        await this.CheckOut.click();
    }
    async asertionforProductVisibility()
    {
       await this.ProductName.isVisible();
    }
}
module.exports={CartPage};
