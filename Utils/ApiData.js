class ApiData
{
    constructor(apicall,loginPayload)
    {
        this.apicall=apicall;
        this.loginPayload=loginPayload;
    }
    async getToken(loginPayload)
    {
        const logiResponce = await this.apicall.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: this.loginPayload,
        })
        const loginResponceJson = await logiResponce.json();
        const token =loginResponceJson.token;
        return token;
    }
    async createOrder(orderCreationPayload)
    {
        let response={};
        response.token=await this.getToken();
        const orderResponce=await this.apicall.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
          
            data:orderCreationPayload,
            headers:
            {
                'authorization' :response.token,
                'Content-Type':  'application/json'
            },
        })
       const order=await orderResponce.json();
       const orderId=await order.orders;
       response.orderId=orderId;
       return response;
    }
}
module.exports={ApiData};