import React from 'react'
import useAuth from '../../hooks/useAuth'

const DashboardHome = () => {
    const { user, admin } = useAuth()
    return (
        <div className="">
            <div className="lg:flex ">
                <div className="lg:w-1/3">
                    <h1 className="text-4xl font-semibold leading-9 text-gray-800">Name: {user.displayName}</h1>
                    <p className="text-base leading-6 mt-4 text-gray-600">Email: {user.email}</p>
                    <p className="text-base leading-6 mt-4 text-gray-600">Type: {admin}</p>
                    <h1 className="text-xl font-semibold text-red-500 leading-9 text-gray-800 ">Only A Learner can Pay online</h1>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome
