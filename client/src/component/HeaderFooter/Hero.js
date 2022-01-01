import React, { useState } from "react";
import { Link, Route } from "react-router-dom";


const Hero = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className="bg-gray-100 overflow-y-hidden" style={{ minHeight: 600 }}>
                <dh-component>
                    <div className="bg-gray-100">
                        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                                    Ride Sharing System <br />
                                    <span className="text-indigo-700"> Power By </span>
                                    <br />
                                    Jamy
                                </h3>

                            </div>
                        </div>
                    </div>
                </dh-component>
            </div>
        </div >
    )
}

export default Hero