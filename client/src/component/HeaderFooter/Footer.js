import React from 'react'
const Footer2 = () => {

    return (
        <div>
            <div className="bg-gray-100">
                <footer id="footer" className="font-bold relative  dark:bg-gray-900">


                    <div className="py-4 flex flex-col justify-center items-center">
                        <img className="w-16" src={logo} alt="" />
                        <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">© Developed by CodeCube IT Solution.</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer2