import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import '../css/dashboard.css'
const LayoutAdmin = (props) => {
    return (
        <>
    <Header />
        <div className="row mt-7">
            
            <div className=" list-admin">
                <ul className="list-groups">
                <li className="list-groups-item">
                        <NavLink activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li className="list-groups-item">
                        <NavLink activeClassName="active" to="/admin/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="list-groups-item">
                        <NavLink activeClassName="active" to="/admin/product">Product</NavLink>
                    </li>
                    <li className="list-groups-item">
                        <NavLink activeClassName="active" to="/admin/category">Category</NavLink>
                    </li>
                    <li className="list-groups-item">
                        <NavLink activeClassName="active" to="/admin/users">User</NavLink>
                    </li>
                </ul>

            </div>
            <div className="profile-admin">
                {props.children}
            </div>
        </div>
        </>
    )
}

export default LayoutAdmin
