class ConfirmationPage 
{
constructor(page)
{
    this.page=page;
    this.email=page.locator(".user__name [type='text']");
    this.placeOrderButton=page.locator(".action__submit");
    this.thankYouText=page.locator(".hero-primary");
    this.orderIdField=page.locator(".em-spacer-1 .ng-star-inserted");
}
    async verifyemail()
{
   await this.email.first().textContent();
}
async placeOrder()
{
    await this.placeOrderButton.click();
}
async verifyOrderDetails()
{
   await this.thankYouText.textContent();
}
    async getOrderID()
{
   const orderId = await this.orderIdField.textContent();
   console.log(orderId);
}
}
module.exports={ConfirmationPage};