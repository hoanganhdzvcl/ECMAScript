import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";
import { danhmucve } from '../../db.json' assert {type: 'json'};
import { ve } from '../../db.json' assert {type: 'json'};
import '../../style.css';

const orderPage = function () {
    console.log(danhmucve);
    console.log(ve);
    return `
    ${HeaderComponent()}
    <h1>Đặt vé máy bay</h1>
    <form action="">
        <table border="1">
            <tr>
                <th>Họ tên</th>
                <td><input type="text" name="" id=""></td>
            </tr>
            <tr>
                <th>Chức minh thư</th>
                <td><input type="text" name="" id=""></td>
            </tr>
            <tr>
                <th>Email</th>
                <td><input type="text" name="" id=""></td>
            </tr>
            <tr>
                <th>Giới tính</th>
                <td>Nam <input type="radio" name="gioiTinh" id=""> Nữ <input type="radio" name="gioiTinh" id=""></td>
            </tr>
            <tr>
                <th>Số điện thoại</th>
                <td><input type="text" name="" id=""></td>
            </tr>
                <tr>
                <th>Chọn chuyến bay</th>
                <td><select name="chuyenBay" id="">
                <option disabled selected>---Chọn chuyến bay---</option>
                ${ve.map(function (v) {
        return ` 
                    <option>${v.text}</option>
                    `
    })}
                </select>
                </td>
            </tr>
            <tr>
                <th>Loại vé</th>
                <td><select name="loaiVe" id="">
                <option disabled selected>---Chọn loại vé---</option>
                ${danhmucve.map(function (danhmuc) {
        return ` 
                    <option>${danhmuc.danhmuc}</option>
                    `
    })}
                </select></td>
            </tr>
      
            <tr>
                <th>Ngày sinh</th>
                <td><input type="date" name="" id=""></td>
            </tr>
            <tr>
                <th>Hành lý</th>
                <td><input type="text" name="" id=""></td>
            </tr>
            <tr>
                <th>Hình thức thanh toán</th>
                <td><select name="chuyenBay" id="">
                <option value="" disable selected>--Chọn hình thức thanh toán--</option>
                    <option value="">Thanh toán tại quầy</option>
                    <option value="">Thanh toán trực tuyến</option>
                </select></td>
            </tr>
            <tr>
                <td><input class = 'btn btn-success' type="submit" value="Đặt vé"></td>
                <td><button type="reset">Reset</button></td>
            </tr>
            
        </table>
    </form>
    ${FooterComponent()}
    `;
}

export default orderPage;