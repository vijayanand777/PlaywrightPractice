class OrderPage
{
    constructor(page)
    {
        this.page=page;
        this.enterCountry=page.locator("[placeholder*='Country']");
        this.countryLists=page.locator(".ta-results");

    }

    async enterAdress(CountryName,partialCountryName)
    {
        await this.enterCountry.pressSequentially(partialCountryName);
 
        const dropdown = this.countryLists;
        await dropdown.waitFor();
        const optionsCount = await dropdown.locator("button").count();
        for (let i = 0; i < optionsCount; ++i) {
           const text = await dropdown.locator("button").nth(i).textContent();
           if (text === CountryName) {
              await dropdown.locator("button").nth(i).click();  
              break;
           }
        } 
    }
}
module.exports={OrderPage};