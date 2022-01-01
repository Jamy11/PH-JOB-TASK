import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import { toast } from "react-toastify";

const Pay100 = () => {
    const [product] = React.useState({
        name: "Bike Course",
        price: 100,
        description: "Bike payment"
    });
    async function handleToken(token, addresses) {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/checkout/`,
            { token, product }
        );
        console.log(response.data)
        const { status } = response.data;

        if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }

    return (
        <div>
            <div >
                <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                    <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                            <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                    <div className="pb-4 md:pb-8 w-full md:w-40">
                                        <img className="w-full hidden md:block" src={'https://theprepared.com/wp-content/uploads/2021/05/cash-hero-TP.jpg'} alt="user" />
                                        <img className="w-full md:hidden" src={'https://theprepared.com/wp-content/uploads/2021/05/cash-hero-TP.jpg'} alt="user" />
                                    </div>
                                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl xl:text-xl font-semibold leading-6 text-gray-800">Bike Driving Lesson</h3>
                                            <div className="flex justify-start items-start flex-col space-y-2">
                                                <p className="text-sm leading-none text-gray-800">
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between space-x-8 items-start w-full">
                                            <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">100$</p>
                                            <StripeCheckout
                                                stripeKey={process.env.REACT_APP_STRIPEKEY}
                                                token={handleToken}
                                                amount={product.price * 100}
                                                name="Bike  Course"
                                                billingAddress
                                                shippingAddress
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pay100
