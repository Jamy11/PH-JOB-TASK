import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

const ManageUsers = () => {
    const profile_link = 'https://icon-library.com/images/user-icon-png/user-icon-png-26.jpg'
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    function handleCheckbox(user){
        fetch(`${process.env.REACT_APP_BACKEND_URL}/users/`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                console.log(data);
            }
        })

    }
    const displayUsers = users
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((user) => {
            return (
                <div >
                    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                            <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                                <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                    <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                        <div className="pb-4 md:pb-8 w-full md:w-40">
                                            <img className="w-full hidden md:block" src={user.profile_picture || profile_link} alt="user" />
                                            <img className="w-full md:hidden" src={user.profile_picture || profile_link} alt="user" />
                                        </div>
                                        <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                            <div className="w-full flex flex-col justify-start items-start space-y-8">
                                                <h3 className="text-xl xl:text-xl font-semibold leading-6 text-gray-800">Full Name:{user.fullname}</h3>
                                                <h3 className="text-xl xl:text-xl font-semibold leading-6 text-gray-800"> Email: {user.email}</h3>
                                                <div className="flex justify-start items-start flex-col space-y-2">
                                                    <p className="text-sm leading-none text-gray-800">
                                                        <span className="text-gray-300">Type: </span> {user.type}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between space-x-8 items-start w-full">
                                                <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">Block User <input type="checkbox" onChange={()=>handleCheckbox(user)} defaultChecked={user.block_status}/></p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            );
        });

    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            {displayUsers}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    )
}

export default ManageUsers
