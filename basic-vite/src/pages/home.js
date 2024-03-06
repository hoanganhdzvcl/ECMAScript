import FooterComponent from "../components/footer"
import HeaderComponent from "../components/header";
import { posts } from '../../db.json' assert {type: 'json'}; // posts la ten bang.
import {products} from '../../db.json' assert {type: 'json'};
const HomePage = function () {
   //  console.log(posts); // posts la 1 mang dataobject
    return `
    ${HeaderComponent()}
    <h1 class= "text-5xl">Trang chủ</h1>
    <table class="border 1px w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-amber-950">
       <tr px-6 py-3 bg-gray-50 dark:bg-gray-800>
          <td>id</td>
          <td>title</td>
          <td>Action</td>
       </tr>
       ${posts.map(function(post){
       return`<tr px-6 py-3 bg-gray-50 dark:bg-gray-800>
          <th>${post.id}</th>
          <th>${post.title}</th>
          <th><a href= "/detailpost/${post.id}">Xem</a></th>
       </tr>`
       })}
    </table>

    <table class="border 1px w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-amber-950">
       <tr px-6 py-3 bg-gray-50 dark:bg-gray-800>
          <td>id</td>
          <td>Ten san pham</td>
          <td>Action</td>
       </tr>
       ${products.map(function(product){
       return`<tr px-6 py-3 bg-gray-50 dark:bg-gray-800>
          <th>${product.id}</th>
          <th>${product.tensp}</th>
          <th><a href= "/detailproduct/${product.id}">Xem</a></th>
       </tr>`
       })}
    </table>
    ${FooterComponent()}
    `
}

// Tạo 1 page comment và đổ dữ liệu ra bảng comment
export default HomePage;
