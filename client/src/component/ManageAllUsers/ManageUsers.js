import React,{ useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    console.log(users)
    return (
        <div>
            list
        </div>
    )
}

export default ManageUsers
