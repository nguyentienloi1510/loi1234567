import React, { useEffect,useState } from 'react'
import {
    NavLink,
    Link,
    useHistory
} from 'react-router-dom';
import { signOut , isAuthentiCated } from '../auth';
import '../css/Homepage.css';
import {useLocation} from'react-router-dom';
const Header = (props) => {
    const nav =window.location.origin;
     const history = useHistory();


  const {pathname} = useLocation();
  const [isLogged,setIsLogged] = useState(false);
   useEffect(() =>{
    isAuthentiCated() && setIsLogged(true)
   },[pathname , isLogged])
    return (

  <div className="header fixed-top">
      <div className="logo">
        <Link to="/"><img className="h-20" src="https://iweb.tatthanh.com.vn/pic/3/blog/images/logo-sach(22).jpg" alt /></Link>
      </div>
      <nav className>
        <ul id="menu">
          <li><NavLink to="/" className="link-menu">Trang chủ</NavLink></li>
          <li><NavLink to="/products" className="link-menu">Sản phẩm</NavLink>
            <ul>
              { props.category && 
                props.category.map((category,index)=>(
                    
                    <li key={index} ><NavLink to={`/category/${category._id}`}>{category.name}</NavLink></li>
                ))}
            </ul></li>
          <li><NavLink to="/about" className="link-menu">Giới thiệu</NavLink></li>
          <li><NavLink to="/tin-tuc" className="link-menu">Tin tức</NavLink></li>
          <li><NavLink to="/contacts" className="link-menu">Liên hệ</NavLink></li>
          <li><NavLink to="/admin/listproduct" className="link-menu">Quản trị</NavLink></li>
        </ul>
          </nav>
          <div className="icons">
            <div className="search">
              <input type="text" name id="test123" placeholder="Tìm kiếm" />
              <button>search</button>
            </div>
        <Link to="/#/cartpage"><i style={{fontSize: 24, color: 'black'}} className="bi bi-circle ml-20 mr-6 fas"></i>

        </Link>
        
            {pathname!=="/signin" && isLogged ?(
              <>
                <Link className="nav-link" 
                  activeClassName="active" 
                  style={{cursor:'pointer'}} 
                  onClick={() => signOut(()=>{
                    setIsLogged(false)
                      history.push('/')
                  })}
                  >SignOut</Link>    
              </>    
            ):(
              <>
              <Link to="/signin">
                  <i style={{fontSize: 24, color: 'black'}} className="bi bi-person-circle fas"></i>
                </Link>
                </>
            )
          }
                
          </div>
    </div>



    )
}

export default Header


{/* <div className="containers mx-auto ">
            <div className="flex grid grid-cols-10 gap-4 h-20 bg-gray-400">
              <div className="col-span-2   h-20 ml-14">
                <Link to="/"><img className="h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtDelP8xnAYJyrp78rZKH2sLfjYrlHF3Z2Q&usqp=CAU" alt /></Link>
              </div>
            <div className="col-span-6  flex">
              <input className="h-10 w-4/5 border-r outline-none my-auto ml-16 rounded-2xl border border-red-400 pl-5 text-lg" type="text" placeholder="Mời bạn nhập sản phẩm cần tìm ..." />
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-search -mx-12 my-auto  " viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                        
            </div>
              <div className="col-span-2  flex my-auto">
                <Link to="/#/cartpage">
                  <i style={{fontSize: 24, color: 'black'}} className="bi bi-circle ml-20 mr-6 fas"></i>
                </Link>
                <Link to="/signin">
                  <i style={{fontSize: 24, color: 'white'}} className="bi bi-person-circle fas"></i>
                </Link>
              </div>
            </div>
            <Nav />
          </div>   */}