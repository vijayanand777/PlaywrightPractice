const {LogInPage}=require("./LogInPage");
const {DashBoardPage}=require("./DashBoardPage");
const {CartPage}=require("./CartPage");
const {OrderPage}=require("./OrderPage");
const {ConfirmationPage}=require("./ConfirmationPage");
class POMManager{
constructor(page)
{
    this.page=page;
    this.LogInPage=new LogInPage(this.page);
    this.DashBoardPage=new DashBoardPage(this.page);
    this.CartPage=new CartPage(this.page);
    this.OrderPage=new OrderPage(this.page);   
    this.ConfirmationPage=new ConfirmationPage(this.page);
}
getLogInPage()
{
    return this.LogInPage;
}
getDashBoardPage()
{
return this.DashBoardPage;
}
getCartPage()
{
    return this.CartPage;
}
getOrderPage()
{
    return this.OrderPage;
}
getConfirmationPage()
{
    return this.ConfirmationPage;
}
}
module.exports={POMManager};