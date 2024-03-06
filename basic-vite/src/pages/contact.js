import FooterComponent from "../components/footer"
import HeaderComponent from "../components/header";
import {router, useEffect, useState} from "../libs/index.js";

const ContactPage = function(){
    //state: render dữ liệu ra component
    const [posts,setPost] = useState([]); // giá trị của state có thể là 1 số or 1 mảng ...
    //Khởi tạo post=[]
    //setPost để xét giá trị cho post
    //useEffect (callback,deps)
    //callback: đối số đầu tiền, đây là hàm truyền vào 
    //deps - depenencies: là những tác động dẫn đến gọi useEffect
    //1. useEffect(callback) : callback được gọi khi component rerender (mỗi lần component hiển thị lên thì sẽ thực hiện gọi callback)
    //2.useEffect(callback,[]): callback chỉ được gọi lần đầu tiên (dùng cho load danh sách)
    //3.useEffect(callback,[deps]): callback được gọi mỗi khi deps được thực hiện
    
    useEffect(()=>{
        //callApi bằng fetch
        fetch('http://localhost:3001/product')
        .then((reponse)=>reponse.json())
        .then((data)=>setPost(data))
   },[])

   useEffect(()=>{
    // 1 mảng nút delete 
    const btnDeletes = document.querySelectorAll(".btn-delete");
    for(let btn of btnDeletes) {
        btn.addEventListener("click",()=> {
            let id = btn.dataset.id; // lấy id ngta click để xóa
            fetch(`http://localhost:3001/product/${id}`,{
                method: 'DELETE'
            }).then(()=> router.navigate("/contact"))
        })
    }
})
   console.log((posts));
   return `
   ${HeaderComponent()}
   <h1>Đây là trang contact</h1>
   <table border=1>
       <tr>
           <th>id</th>
           <th>title</th>
           <th>views</th>
           <th>hành động</th>
       </tr>
       ${posts.map(function (post) {
          return `<tr>
               <th>${post.id}</th>
               <th>${post.name}</th>
               <th>${post.price}</th>
               <th>
                   <a href="/edit-post/${post.id}">sửa</a>
                   <button data-id="${post.id}" class="btn-delete">Delete </button>
               </th>
           </tr>`
       })}
   </table>
   <h1 class="text-3xl font-bold underline">
   Hello world!
 </h1>
   ${FooterComponent()}
`
}

export default ContactPage;




