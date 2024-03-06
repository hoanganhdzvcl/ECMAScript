import 'bootstrap/dist/css/bootstrap.min.css'
import { render,router } from './lib';
import addProductPage from './pages/addProduct';
import productPage from './pages/product';
const app = document.querySelector("#app");
router.on('/product',function(){
    render(app,productPage);
})
router.on('/product/add',function(){
    render(app,addProductPage);
})
router.on('/product/update/:id',function(){
    
})
router.on('/signup',function(){
    
})
router.on('/signin',function(){
    
})
router.resolve();
    