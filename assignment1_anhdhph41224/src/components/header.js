const HeaderComponent = function () {
  return  `
    <style>
    nav {
      background-color: #f27125;
      color: #fff;
  }
  
  ul {
      list-style-type: none;
      padding: 10px 10px;
      display: flex;
      justify-content: space-around;
  }
  
  a {
      text-decoration: none;
      color: inherit;
  }
  </style>
    <nav>
        <ul>
          <li><a href="/intro">Giới thiệu</a></li>
          <li><a href="/contact">Liên hệ</a></li>
          <li><a href="/addticket">Đặt vé</a></li>
          <li><a href="/manageticket">Quản lý vé đã đặt</a></li>
        </ul>
    </nav>
    `
}
export default HeaderComponent; // export de file khac co the làm việc được