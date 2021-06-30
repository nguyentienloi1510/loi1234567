import React from 'react'
import Products from '../components/Products';
import '../css/Homepage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const linkanh =window.location.origin;
    return (
       <div className="box  ">
  <div className="banner">
     <img src={`https://theme.hstatic.net/1000345726/1000439588/14/ms_banner_img1.jpg?v=690`}></img>
  </div>
  <div className="content-top">
    <h3>SHOP</h3>
    <hr />
  </div>
  <div className="content">
    <div className="content-left">
      <Link to="/#/category/1">
        <img  src={`https://svtech.com.vn/wp-content/uploads/2020/10/sach-706x400.jpg`} width="550px" height="500px"  alt />
      </Link>
    </div>
    <div className="content-right">
      <Link to="/#/category/2">
        <img  src={`https://firstnews.com.vn/public/uploads/files/bo-sach-osho-7-cuon.jpg`} width="500px" height="200px" alt />
      </Link>
    </div>
  </div>
  <div className="title-content-bottom">
    <h3>NEW</h3>
    <hr />
    <Link to="/products">
      <span>Xem thêm</span>
    </Link>
  </div>
  <div className="content-bottom">
    <div className="content-show">
      <Link to="/#/products">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNobBhcnzaJg1u2q2lobsmvEDmoGMdZ9G5rw&usqp=CAU" width="400px" height="400px" alt />
      </Link>
    </div>
    <div className="content-show">
      <Link to="/#/products">
        <img src="https://isachhay.net/wp-content/uploads/2018/09/toi-tu-hoc-sach-hay-tiki.jpg" width="400px" height="400px" alt />
      </Link>
    </div>
    <div className="content-show">
      <Link to="/#/products">
        <img src="https://novai.vn/upload/images/c55f8c043e5ff5842aa15dc1f3b6c20f.jpg" width="420px" height="370px" alt />
      </Link>
    </div>
  </div>
  <div className="title-content-bottom">
    <h3>Tin Tức</h3>
    <hr />
    <Link to="/#/products">
      <span style={{paddingTop: 20}}>Xem thêm</span>
    </Link>
    <div className="title-homepage">
      <div className="images-news" style={{paddingTop: 20}}>
        <Link to>
          <img src="http://saigoncalendar.com/wp-content/uploads/2019/06/photo1514606141082-1514606141082-1514690372285.jpg" alt width="400px" height="300px" />
        </Link>
      </div>
      <div className>
        </div>
    </div>
  </div>
</div>


    )
}

export default HomePage
