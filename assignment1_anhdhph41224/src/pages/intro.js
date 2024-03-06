import '../../style.css';
import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";
import { router, useEffect, useState } from '../libs';

const introPage = function () {
   const [posts,setPost] = useState([]);
   useEffect(()=>{
      fetch('http://localhost:3001/danhmucve')
      .then((reponse) => reponse.json())
      .then((data)=>setPost(data))
   },[])

   const [ves,setVe] = useState([]);
   useEffect(()=>{
      fetch('http://localhost:3001/ve')
      .then((reponse)=>reponse.json() )
      .then((data)=>setVe(data))
   },[])

   useEffect(()=>{
      const btnDeletes = document.querySelectorAll(".btn-delete");
      for(let btn of btnDeletes){
         btn.addEventListener("click",()=>{
            console.log('đâssd');
            let id = btn.dataset.id;
            if (confirm("Bạn chắc chắn muốn xóa !")) {
               fetch(`http://localhost:3001/danhmucve/${id}`,{
                  method:'DELETE'
               }) .then(()=>router.navigate('/intro'));
               alert('Xóa thành công !')
            }
         })
      }
   })
   useEffect(()=>{
      const btnDeletes = document.querySelectorAll(".btn-danger");
      for(let btn of btnDeletes){
         btn.addEventListener("click",()=>{
            console.log('đâssd');
            let id = btn.dataset.id;
            if (confirm("Bạn chắc chắn muốn xóa !")) {
               fetch(`http://localhost:3001/ve/${id}`,{
                  method:'DELETE'
               }) .then(()=>router.navigate('/intro'));
               alert("Xóa chuyến bay thành công !")
            }
         })
      }
   })
   return  /*html*/`
    ${HeaderComponent()}
    <h1>Quản lý sản phẩm</h1>
    <h3>Danh mục vé</h3>
    <table class="table">
    <tr>
    <th colspan = "3"><a href='/add-cat'>Thêm danh mục vé</a></th>
    </tr>
       <tr class= "table-primary">
          <th>#</th>
          <th>Danh mục vé</th>
          <th>Action</th>
       </tr>
       ${posts.map(function (danhmuc) {
      return `<tr>
          <td>${danhmuc.id}</td>
          <td>${danhmuc.danhmuc}</td>
          <td>
          <button><a href="/edit-cat-ticket/${danhmuc.id}"> Sửa </a></button>
          <button type="button" data-id=${danhmuc.id} class="btn-delete">Xóa</button>
          </td>
       </tr>
       `
   }
   )}
    </table>
    <h3>Các chuyến bay</h3>
    <table class="table">
    <tr>
    <th colspan = "3"><a href='/add-fly'>Thêm chuyến bay</a></th>
    </tr>
       <tr class= "table-primary">
          <th>#</th>
          <th>Chuyến bay</th>
          <th>Giá vé (Phổ thông)</th>
          <th>Action</th>
       </tr>
       ${ves.map(function (v) {
      return `<tr>
           <td>${v.id}</td>
           <td>${v.text}</td>
           <td>${v.gia}</td>
           <td>
          <button><a href="/edit-fly/${v.id}"> Sửa </a></button>
          <button type="button" data-id=${v.id} class="btn-danger">Xóa</button>
          </td>
        </tr>`
   })}
    </table>
    ${FooterComponent()}
    `;
}

export default introPage;