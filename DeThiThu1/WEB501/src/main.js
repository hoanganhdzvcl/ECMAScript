import 'bootstrap/dist/css/bootstrap.min.css';
import {render,router} from "./lib";
import StudentPage from './pages/studentPage';
import addStudentPage from './pages/addStudentPage';
import editStudent from './pages/editStudent';
const app = document.querySelector("#app");
router.on('/student',function(){
    render(app,StudentPage);
})
router.on('/student/add',function(){
    render(app,addStudentPage);
})
router.on('/student/update/:id',function({data}){
    render(app,() => editStudent(data.id))
})
router.on('/signup',function(){
    render(app)
})
router.on('/signin',function(){
    render(app)
})
router.resolve();