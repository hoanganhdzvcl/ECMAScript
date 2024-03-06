// import Navigo from "navigo";
import {render,router} from "./libs";
import ContactPage from "./pages/contact";
import introPage from "./pages/intro";
import orderPage from "./pages/orderticket";
import addTicketPage from "./pages/addTicket";
import editCatTicket from "./pages/editCatTicket";
import addCatPage from "./pages/addCat";
import addFlyPage from "./pages/addFly";
import editFlyPage from "./pages/editFly";
import ManageTicketPage from "./pages/manageTicket";
import editTrangThai from "./pages/editTrangThai";

// const render = (container, components) => {
//     document.querySelector(container).innerHTML = components();
// }
// mặc định định nghĩa route
// const router = new Navigo('/', { linksSelector: "a" });
const app = document.querySelector('#app');
router.on('/', function () {
    render(app, introPage)
})
router.on('/intro', function () {
    render(app, introPage)
})

router.on('/contact', function () {
    render(app, ContactPage);
}
)
router.on('/orderticket',function(){
    render(app,orderPage)
})
router.on('/addticket',function(){
    render(app,addTicketPage)
})
router.on('/add-cat',function(){
    render(app,addCatPage)
})
router.on('/add-fly',function(){
    render(app,addFlyPage)
})
router.on('/manageticket' ,function(){
render(app,ManageTicketPage)
})
router.on('/edit-cat-ticket/:id',function({data}){
    render(app,()=>editCatTicket(data.id))
})
router.on('/edit-fly/:id',function({data}){
    render(app,()=>editFlyPage(data.id))
})
router.on('/edit-trangthai/:id',function({data}){
    render(app,()=>editTrangThai(data.id))
})

router.resolve();

