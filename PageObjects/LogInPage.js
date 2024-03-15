class LogInPage
{
constructor(page)
{
    this.page=page;
    this.userName=page.locator("#userEmail");
    this.password=page.locator("#userPassword");
    this.logInButton=page.locator("[value='Login']");
}
    async goTo()
{
    await this.page.goto("https://rahulshettyacademy.com/client");
}

    async validLogIn(email,password)
{
    await this.userName.fill(email);
   await this.password.fill(password);
   await this.logInButton.click();
   await this.page.waitForLoadState('networkidle'); 
}
}
module.exports={LogInPage};