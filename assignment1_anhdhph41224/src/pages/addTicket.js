import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";
import { router, useEffect, useState } from "../libs";

const addTicketPage = () => {
    useEffect(() => {
        //Viet code trong useEffect
        const addForm = document.querySelector('#add-form');
        const tenkhachhang = document.querySelector("#tenkhachhang");
        const cmt = document.querySelector("#cmt");
        const email = document.querySelector("#email");
        const gioitinh = document.getElementsByName('gioitinh');

        const loaive = document.querySelector("#loaive");
        const ve = document.querySelector("#ve");
        const trangthai = document.querySelector('#trangthai')
        // const sdt = document.querySelector("#sdt");
        // const chuyenbay = document.querySelector("#chuyenbay");
        // const loaive = document.querySelector("#loaive");
        // const hinhthucthanhtoan = document.querySelector("#hinhthucthanhtoan");
        addForm.addEventListener("submit", (e) => {
            e.preventDefault();//Ngan su kien load lai trang
            var check;
            for (var i = 0; i < gioitinh.length; i++) {
                // Check if the radio button is checked
                if (gioitinh[i].checked) {
                    check = gioitinh[i].value
                }
            }
            let newKhachHang = {
                "tenkhachhang": tenkhachhang.value,
                "cmt": cmt.value,
                "email": email.value,
                "gioitinh": check,
                "loaive": loaive.value,
                "ve": ve.value,
                "trangthai":trangthai.value
            }
            fetch("http://localhost:3001/khachhang", {
                method: 'POST', //API them Method la POST.
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newKhachHang) // Ep lai kieu data de gui len api

            }).then(() => router.navigate("/intro"))
            alert("Đặt vé thành công !")
        })
    })
    const [posts, setPost] = useState([]); // giá trị của state có thể là 1 số or 1 mảng ...

    useEffect(() => {
        //callApi bằng fetch
        fetch('http://localhost:3001/ve')
            .then((reponse) => reponse.json())
            .then((data) => setPost(data))
    }, []);

    const [catVes, setCat] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/danhmucve')
            .then((reponse) => reponse.json())
            .then((data) => setCat(data))
    }, [])
    return /*html */ `
    ${HeaderComponent()}
    <h1>Đặt vé máy bay</h1>
    <div>
    <form action="#" id="add-form">
    Tên khách hàng: <input class = 'form-control' type="text" id="tenkhachhang"/> 
    Chứng minh thư: <input class = 'form-control' type="text" id="cmt"/> 
    Email: <input class = 'form-control' type="text" id="email"/> 
    Giới tính: Nam <input  type="radio" name="gioitinh" id="gioitinh" value="Nam"/> 
    Nữ <input  type="radio" name="gioitinh" id="gioitinh" value="Nữ"/> <br> <br>
    Số điện thoại: <input class = 'form-control' type="text" id="sdt"/> 
    Chọn loại vé: <select class = 'form-control' name="loaive" id="loaive">
    <option disabled selected>---Chọn loại vé---</option>
    ${catVes.map(function (cat) {
        return ` 
        <option>${cat.danhmuc}</option>
        `
    })}
    </select> 
    Chọn chuyến bay: <select class = 'form-control' name="ve" id="ve">
                <option disabled selected>---Chọn chuyến bay---</option>
                ${posts.map(function (ve) {
        return ` 
                    <option>${ve.text}</option>
                    `

    })}
                </select>
                <input type="hidden" name="trangthai" id="trangthai" value="Chờ xử lý">
    <button type="submit" class='btn btn-success'> Đặt vé </button>
    </form>
    </div>
    ${FooterComponent()}
    `
}
export default addTicketPage;


