import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div>
            
  <nav className="navbar navbar-expand-lg mx-auto navbar-light bg-gray">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item"><NavLink to="/" className="link-menu">Trang chủ</NavLink></li>
      <li className="nav-item"><NavLink to="/products" className="link-menu">Sản phẩm</NavLink>
        <ul>
           { props.category && 
            props.category.map((category,index)=>(
                
                <li key={index} ><NavLink to="">{category.name}</NavLink></li>
            ))}
        </ul></li>
      <li className="nav-item"><NavLink to="/about" className="link-menu">Giới thiệu</NavLink></li>
      <li className="nav-item"><NavLink to="/tin-tuc" className="link-menu">Tin tức</NavLink></li>
      <li className="nav-item"><NavLink to="/contacts" className="link-menu">Liên hệ</NavLink></li>
      <li className="nav-item"><NavLink to="/admin/listproduct" className="link-menu">Quản trị</NavLink></li>
      {/* <li><NavLink  className="link-menu" style={{cursor:'pointer'}} >Thoát</NavLink></li> */}
    </ul>
  </nav>
        </div>




    )
}

export default Nav
