import data from '../../db.json';
import FooterComponent from '../components/footer';
import HeaderComponent from '../components/header';
const ProductDetail = function (id) {
    // Tra ra 1 object theo id dda truyen vao
    const product = data.products.find((item) => item.id == id);
    //Tra ve 1 object theo dieu kien nao do
    return `
    ${HeaderComponent()}
    <div>
          <p class ="text-blue-600">ID:${product.id}</p>
         Ten san pham: ${product.tensp} <br>
         Gia san pham: ${product.gia}<br>
         Tinh trang: ${product.trangthai}<br>
    </div>
${FooterComponent()}
    `
}
export default ProductDetail;