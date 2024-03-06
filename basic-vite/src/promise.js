//============= PROMISE ==============
//1. Promise là 1 đối tượng thể hiện kết quả tác vụ bất đồng bộ trong tương lai
//2. Kết quả promise trả về có thể là:
// - Thành công (fullfill)
// - Thất bại (reject)
// - Chưa hoàn thành (Đang chờ ) (pending)
import { news } from '../db.json' assert {type: 'json'}; // posts la ten bang.
const products = [
    {id:1,name:"Product 1"},
    {id:2,name:"Product 2"},
]

//Sử dụng cho việc gọi API
const promise = new Promise(
    function (resolve,reject) {
        setTimeout(function(){
            resolve(products); // Promise trả về sẽ là thành công
        },5000)
    // reject("Có lỗi xảy ra");
    }
);
// promise.then((data)=>{ // data nhận của resolve
//     console.log(data+"Đây là data");
// })
// console.log(promise);
// console.log("Hoàn thành");


console.log(news);
const tintuc = new Promise(
    function(resolve,reject){
        setTimeout(function(){
            resolve(news);
        },2000)
        // reject("Lỗi");
    }
    
)
console.log(tintuc);


const allNews = document.getElementById("content");
tintuc.then(function(i){
    allNews.innerHTML = JSON.stringify(i);
})


// Sử dụng promise hoặc callback để thực hiện 
//Load data ra 1 trang tin tức (data tin tức tự tạo trong db.json)
//Yêu cầu giả lập data load xuống bị chậm trong 10s