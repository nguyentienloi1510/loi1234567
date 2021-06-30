import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductAPI from '../api/productAPI';
import { Link } from 'react-router-dom';
const ProductDetailPage = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState({loading:false , data:[]});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await ProductAPI.get(id);

        const { data:results } = await ProductAPI.getAll();

       const getProductRelated = results.filter((product) => product.category == data.category);
      
   
       setCategory({loading:true,data:[...getProductRelated]})
        setProduct(data);
        
      } catch (error) {

      }
    }
    getProduct();
    return () =>{
      setCategory({loading:true,data:[]})
    }

  }, [])
   
  // console.log(result)
  return (
    <div>
      <div className="main-top">
        <a href>
          <span>Trang chủ</span>
        </a>
        <a href="/products">
          <span> / Danh Mục </span>
        </a>
        <span> / {product.name}</span>
      </div>
      <div className="product-detail">
        <div className="image-product">
          <img src={`http://localhost:4000/api/product/photo/${product._id}`} width={330} height={570} className="img-fluid" alt="${result.name}" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <hr />
          <div className="price-products">
            <p className>${product.price}VNĐ</p>
          </div>
          <hr />
          <p className="card-text">Trạng thái:
                      <span>còn hàng</span></p><p>
          </p><hr />
          <p className="card-text">Mô tả:<br />
            <span>{product.description}</span></p>
          <button data-id="${result.id}" className="btn" id="btnAddcart">Thêm vào giỏ hàng</button>
        </div>
      </div>
      <div className="title-product-relate">
      <h3>Sản phẩm liên quan  </h3>
      </div>
      <div className="product-relate">
       
     
        {category.loading && 
         category.data.map((product, index) => (
     
     <div className="profile-card" key={index}>
  <Link to={`/product/${product._id}`}>
    <img width="190px" height="230px" src={`http://localhost:4000/api/product/photo/${product._id}`} className alt="" />
  </Link>
  <div className="card-body">
    <p className="card-name">{product.name}</p>

    <div className="price-product">
      <p>${product.price}VNĐ</p></div>

    <Link to={`/product/${product._id}`} className="btn">Show</Link>


  </div>
</div>

)
)}
       
                </div>
    </div>
  )
}

export default ProductDetailPage