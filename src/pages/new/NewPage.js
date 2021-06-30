import React from 'react'

const NewPage = () => {
    return (
  <div>
  <div className="main-top" style={{paddingTop: 90}}>
    <a href>
      <span>Trang chủ</span>
    </a>
    <span> / Tin tức</span>
  </div>
  <div className="profile-news" style={{padding: '50px 200px', display: 'grid', gridTemplateColumns: '3fr 4fr'}}>
    <div className="images-news">
      <a href>
        <img src="https://cdn.shopify.com/s/files/1/0450/8267/3319/files/pages-of-a-book-curled-into-a-heart-shape_300x300.jpg?v=1621947425" alt width="400px" height="300px" />
      </a>
    </div>
    <div className="title-news">
      <a href>
        <h3>NHỮNG THAY ĐỔI QUAN TRỌNG ĐỐI VỚI HIỆU SÁCH IMRF</h3>
      </a>
      <div className="title-news-span">
      Do những thay đổi trong sắp xếp tại Nhà xuất bản IMO, IMRF Bookshop không còn có thể chấp nhận các đơn đặt hàng bản in ấn của Ấn phẩm IMO nữa.

Chúng tôi vẫn có thể chấp nhận các đơn đặt hàng cho các ấn phẩm và phần mềm kỹ thuật số IMO (ví dụ: Sách điện tử, Người đọc điện tử và Cơ sở dữ liệu).

May mắn thay, hầu hết sách IMO đều có sẵn ở định dạng kỹ thuật số, dưới dạng Sách điện tử (PDF) hoặc Trình đọc điện tử (bạn cũng sẽ yêu cầu  Phần mềm Giá sách IMO miễn phí để truy cập Trình đọc sách điện tử). 

Và chúng tôi vẫn bán Cơ sở dữ liệu xuất bản IMO (" Trên web " và " Tải xuống ").

Tất nhiên, Bookshop cũng sẽ tiếp tục bán Sách IMRF (Sách bìa mềm và Sách điện tử) của riêng chúng tôi.

Chúng tôi xin lỗi vì bất kỳ sự bất tiện nào gây ra bởi những thay đổi này, nằm ngoài tầm kiểm soát của chúng tôi.
      </div>
    </div>
  </div>
</div>

    )
}

export default NewPage
