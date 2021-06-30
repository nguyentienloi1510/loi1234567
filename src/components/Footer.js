import React from 'react'
import {

    Link
} from 'react-router-dom';
const Footer = () => {
    return (
        <div>
  <div className="footer-top">
    <div className="title-footer">
      <h3>HỆ THỐNG CỬA HÀNG BookShop247
      </h3>
      <p>
      BookShop247 1: 121 Nguyễn Trãi Q.1 <br />
      BookShop247 2: 26 LÝ TỰ TRỌNG Q.1 ( THE NEW PLAYROUND) <br />
      BookShop247 3: 350 ĐIỆN BIÊN PHỦ F17 Q. BÌNH THẠNH ( G TOWN) <br />
      </p>
    </div>
    <div className="title-footer">
      <h3>HƯỚNG DẪN &amp; CHÍNH SÁCH<br />
      </h3>
      <Link to>
        <p>
          -Chính sách bảo mật
        </p>
      </Link>
      <Link to>
        <p>
          -Thẻ Thành Viên  
        </p>
      </Link>
      <Link to>
        <p>
          -Chính sách thanh toán
        </p>
      </Link>
    </div>
    <div className="title-footer">
      <h3>Thông tin cửa hàng BookShop247
      </h3>
      <p>
        Website: BookShop247.com <br />
        Sdt: 0919644023 <br />
        Địa chỉ: 170 Láng Hạ <br />
      </p>
    </div>
    <div className="title-footer">
      <h3>PHƯƠNG THỨC THANH TOÁN
      </h3>
      <p>
      </p>
    </div>
  </div>
  <div className="footer-bottom">
    <p> © Bản quyền thuộc về Book shop
      <br />
      Thiết kế website bởi : Nguyễn Tiến Lợi</p>
      <div className="footer-box-footer">
        <div className="linked-box-social">
          <a href><i className="fab fa-facebook-square mx-auto" style={{fontSize: 24, color: 'blue'}} />Facebook</a>

         <a href><i className="fa fa-instagram" aria-hidden="true" style={{fontSize: 24, color: 'blue'}} />instagram</a>

          <a href> <i class="fa fa-youtube" aria-hidden="true" style={{fontSize: 24, color: 'red'}}></i> youtube</a>
        </div>
      </div>
  </div>
  

  </div>

    )
}

export default Footer;
