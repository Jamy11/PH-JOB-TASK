import React from 'react'
import useAuth from '../../hooks/useAuth'

const DashboardHome = () => {
    const { user } = useAuth()
    return (
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
            <div className="lg:flex items-center justify-between">
                <div className="lg:w-1/3">
                    <h1 className="text-4xl font-semibold leading-9 text-gray-800">{user.displayName}</h1>
                    <p className="text-base leading-6 mt-4 text-gray-600">Email: {user.email}</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome
