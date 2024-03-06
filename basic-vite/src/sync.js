import { news } from '../db.json' assert {type: 'json'}; // posts la ten bang.
console.log("Nấu cơm");
setTimeout(function () {
    console.log("Rửa bát");
},1000)
console.log("Quét nhà");
console.log("Giặt quần áo");

//=========> Bất đồng bộ


//Callback là hình thức truyền hàm vào hàm 
const products = [
    {id:1,name:"Product 1"},
    {id:2,name:"Product 2"},
]
function fetchData(callback,data){ // callback là hàm
    //Giả sử callback(data) lấy dữ liệu từ trên server trả về
    // Giả sử bên server có vấn đề chưa trả về dữ liệu
setTimeout(function(){
    callback(data);
},10000)
//Khi truyền hàm vào hàm thì đối số  callback phải sử dụng như 1 hàm 
// và có đối số tương ứng như hàm muốn truyền
// callback(5,6)
}

// function tinhTong(a,b) {
//     const c = a+b;
//     console.log("Tổng là:" +c);
// }
function processData(data){
    // console.log("Data:",data);
}
//Truyền giá trị vào hàm
// processData(products);
fetchData(processData,products);
console.log("Hoàn thành");



function fetchNews(callback,data){
    setTimeout(function(){
        callback(data)
    },5000);
}

function processNews(data){
    console.log("News:",data);
}
fetchNews(processNews,news);
console.log("Test ok");
// Sử dụng promise hoặc callback để thực hiện 
//Load data ra 1 trang tin tức (data tin tức tự tạo trong db.json)
//Yêu cầu giả lập data load xuống bị chậm trong 10s
// console.log(typeof fetchNews);

