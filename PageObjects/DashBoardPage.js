class DashBoardPage {
    constructor(page) {
        this.page = page;
        this.product = page.locator(".card-body b");
        this.products = page.locator(".card-body");

    }
    async searchProductAddCart(productName) {
        const titles = await this.product.allTextContents();
        console.log(titles);
        const count = await this.products.count();
        for (let i = 0; i < count; ++i) {
            if (await this.products.nth(i).locator("b").textContent() === productName) {
                //add to cart
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }
}
module.exports = { DashBoardPage };