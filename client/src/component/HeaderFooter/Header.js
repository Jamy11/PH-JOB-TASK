import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const [show, setShow] = useState(false);
    const { user, logout } = useAuth()
    return (
        <div>
            <nav className="w-full bg-gray-100  w-full border-b">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link to={'/'}><h1 className='text-4xl p-4'>Ride Sharing</h1></Link>
                    
                    <div>
                        <div className="sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none" onClick={() => setShow(!show)}>
                            {show ? (
                                <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="md:hidden icon icon-tabler icon-tabler-menu" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={4} y1={16} x2={20} y2={16} />
                                </svg>
                            ) : (
                                <svg aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="md:hidden icon icon-tabler icon-tabler-menu" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={4} y1={8} x2={20} y2={8} />
                                    <line x1={4} y1={16} x2={20} y2={16} />
                                </svg>
                            )}
                            {show && <div id="menu" className="block lg:hidden ">
                                <div onClick={() => setShow(!show)} className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-0 pt-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                                <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                                    {user?.email ?
                                        <>
                                            <li className="text-gray-800 hover:text-gray-900 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                                Welcome, {user.displayName}
                                            </li>
                                            <li className="text-gray-800 hover:text-gray-900 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                                <Link to='/dashboard'>Dashboard</Link>
                                            </li>

                                            <button className="text-gray-800 hover:text-gray-900 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10" onClick={logout} variant="text">Log Out</button>
                                        </>
                                        :
                                        <>
                                            <li className="text-gray-800 hover:text-gray-900 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                                <Link to='/login'>Login</Link>
                                            </li>
                                            <li className="text-gray-800 hover:text-gray-900 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                                <Link to='/dashboard'>Dashboard</Link>
                                            </li>
                                        </>
                                    }

                                </ul>
                            </div>}

                        </div>
                        <div id="menu" className="md:block lg:block hidden">
                            <div onclick="toggleMenu(false)" className="block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none z-30 top-0 pt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                </svg>
                            </div>
                            <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">

                                {user?.email ?
                                    <>
                                        <li className="text-gray-800 hover:text-gray-900 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                            Welcome, {user.displayName}
                                        </li>
                                        <li className="text-gray-800 hover:text-gray-900 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                            <Link to='/dashboard'>Dashboard</Link>
                                        </li>

                                        <button className="text-gray-800 hover:text-gray-900 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10" onClick={logout} variant="text">Log Out</button>
                                    </>
                                    :
                                    <>
                                        <li className="text-gray-800 hover:text-gray-900 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                            <Link to='/login'>Login</Link>
                                        </li>
                                        <li className="text-gray-800 hover:text-gray-900 cursor-pointer lg:text-lg pt-10 md:pt-0 md:ml-5 lg:ml-10">
                                            <Link to='/dashboard'>Dashboard</Link>
                                        </li>
                                    </>
                                }

                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;