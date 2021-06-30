import React from 'react'
import { NavLink, Link  } from 'react-router-dom';
import Header from '../components/Header';
import'../css/products.css'
const ProductPage = (props) => {
    console.log(props.products)

    return (
        <>
        <div className="list-products">
           {
            props.products  &&    props.products.map((product)=>(
            <div className="card mt-50" style={{width: '18rem'}}>
              <Link to={`products/${product._id}`}>
                  <img src={`http://localhost:4000/api/product/photo/${product._id}`} className="card-img-top"  width="150px" height="200px" />
                 </Link>
              <div className="card-body">
                <h5 className="card-title">Ten SP:{product.name}</h5>
                <p className="card-text">Gia Tien:{product.price}VNĐ</p>
                 <Link to={`product/${product._id}`} className="btn">Show</Link>
                <button data-id="${product._id}" classname="btn btn-primary" id="btnAddcart">Add to cart</button>
              </div>
            </div>
            ))}
            </div>
    </>
    )
}

export default ProductPage
