import '../../style.css';
import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";
import { router, useEffect, useState } from '../libs';
const ManageTicketPage = () => {
    const [khachhangs, setKhachHang] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/khachhang')
            .then((reponse) => reponse.json())
            .then((data) => setKhachHang(data))
    }, [])

    useEffect(() => {
        const btnDeletes = document.querySelectorAll(".btn-delete");
        for (let btn of btnDeletes) {
            btn.addEventListener("click", () => {
                console.log('đâssd');
                let id = btn.dataset.id;
                if (confirm("Bạn chắc chắn muốn xóa !")) {
                    fetch(`http://localhost:3001/danhmucve/${id}`, {
                        method: 'DELETE'
                    }).then(() => router.navigate('/intro'));
                }
            })
        }
    })

    return  /*html*/`
    ${HeaderComponent()}
    <h1>Quản lý vé đã đặt</h1>
    <table class="table">
       <tr class= "table-primary">
          <th>#</th>
          <th>Tên khách hàng</th>
          <th>Số CMND</th>
          <th>Giới tính</th>
          <th>Email</th>
          <th>Loại vé</th>
          <th>Vé</th>
          <th>Trạng thái</th>
          <th>Action</th>
       </tr>
       ${khachhangs.map(function (khachhang) {
        return `<tr>
          <td>${khachhang.id}</td>
          <td>${khachhang.tenkhachhang}</td>
          <td>${khachhang.cmt}</td>
          <td>${khachhang.gioitinh}</td>
          <td>${khachhang.email}</td>
          <td>${khachhang.loaive}</td>
          <td>${khachhang.ve}</td>
          <td>${khachhang.trangthai}</td>
          <td>
          ${khachhang.trangthai == 'Chờ xử lý' ? `<button><a href="/edit-trangthai/${khachhang.id}"> Sửa trạng thái </a></button>` : ''}
          </td>
       </tr>
       `
       
    }
    )}
    </table>
    ${FooterComponent()}
    `;
}
export default ManageTicketPage;