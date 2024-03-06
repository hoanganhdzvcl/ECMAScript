// import Navigo from "navigo";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import CommentPage from "./pages/comment";
import PostDetail from "./pages/postDetail";
import ProductDetail from "./pages/productDetail";
import {render,router} from "./libs";
import AddPostPage from "./pages/addPost";
import UpdatePostPage from "./pages/updatePost";
// const render = (container, components) => {
//     document.querySelector(container).innerHTML = components();
// }
// mặc định định nghĩa route
// const router = new Navigo('/', { linksSelector: "a" });

const app = document.querySelector('#app');
router.on('/home', function () {
    render(app, HomePage)
})

router.on('/contact', function () {
    render(app, ContactPage);
}
)
router.on('/comment',function(){
    render(app,CommentPage)
})
router.on('/add-post',function() {
    render(app,AddPostPage);
})
router.on('/edit-post/:id',function({data}) {
    render(app,()=> UpdatePostPage(data.id));
})
//Router param
// ví dụ detailpost/8 <=> id=8;
router.on('/detailpost/:id',function({data}){
render(app,()=>PostDetail(data.id))
})
router.on('/detailproduct/:id',function({data}){
    render(app,()=>ProductDetail(data.id))
});


router.resolve();

//Tạo 1 list data product trong db.json gồm
// id,tensp,gia,trangthai
//Sử dụng tailwind ket hop route xây dựng ra 1 Trang
//Danh sách sản phẩm
//Chi tiết sản phẩm

