import React from 'react'
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { CircularProgress } from '@mui/material'
import { NavLink, useLocation, useHistory } from 'react-router-dom';

const RegisterFormRider = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { registerUser, isLoading } = useAuth()
    const history = useHistory();

    const onSubmit = data => {
        if (data['password'].length >= 6 && data['password'] === data['con_pass'] && parseInt(data['age']) < 100) {
            delete data.con_pass; 
            data.type = 'rider' 
            data.block_status = 'false' 
            registerUser(data.email, data.password, data.fullname, history, data);
        }
        else {
            alert('Password does not match or must be atleast 7')
        }
    }
    if (isLoading) {
        return (
            <CircularProgress />

        )
    }
    return (
        <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4" >
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                        Register as Rider
                    </p>



                    <div className="w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
                        <form >
                            <div className="mb-4 mt-5">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Full Name
                                </label>
                                <input {...register("fullname", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Email
                                </label>
                                <input {...register("email", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type='email' />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Age
                                </label>
                                <input type='number' {...register("age", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Adress
                                </label>
                                <input {...register("adresss", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Phone
                                </label>
                                <input type='number'  {...register("phone", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Driving License Picture
                                </label>
                                <input {...register("d_l_picture", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Nid Picture
                                </label>
                                <input {...register("nid_picture", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Profile Picture
                                </label>
                                <input {...register("profile_picture", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Car Information
                                </label>
                                <input {...register("car_info", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Passowrd
                                </label>
                                <input type='password' {...register("password", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Confirm Passowrd
                                </label>
                                <input type='password' {...register("con_pass", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Vehicle Type
                                </label>
                                <select {...register("vehicle")}>
                                    <option value="car">Car</option>
                                    <option value="bike">Bike</option>
                                </select>
                            </div>

                            <div className="flex items-center justify-between">
                                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value='Submit' />
                            </div>
                        </form>


                        <NavLink to='login'>
                            <div>
                                <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-5">
                                    Have an account? Login Now
                                </button>
                            </div>
                        </NavLink>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default RegisterFormRider
