//Template string
// let name = "anhdh";
// let age = [20,30];
// let msg = "hello";
// let msg = `Hello ${name} tuổi ${age[1]}`; 
// cặp dấu `...` hiểu tất cả kí tự ở trong, kể cả dấu cách.
// console.log(msg);



//Tạo ra các biến tên, năm sinh , địa chỉ,gioitinh gán giá trị : 1/0
// -Tính tuổi = Năm hiện tại - Năm sinh
// - Dùng log để hiện thị ra câu lệnh sau : 
// Ông/Bà Nguyễn Văn A 27 tuổi có/không đủ điều kiện đi NVQS.
// gioitinh=1 là ông , gioitinh=0 là bà (hien thi trong msg)
//Biết độ tuổi đi NVQS từ 18-27;

//(TOÁN TỬ 3 NGÔI THƯỜNG DÙNG Ở IF ELSE 1 ĐIỀU KIỆN)

// let name =  prompt("Nhập tên: ");
// let currentYear = new Date().getFullYear();
// let date = prompt("Nhập tuổi:");
// let address = "Soc Son"
// let gioiTinh = "1";
// let checkgioiTinh = gioiTinh ==1 ?"Ông" : "Bà";
// let age = currentYear - date;
// let checkDieuKien = age >=18 && age<=27? "Đủ ĐK" :"Không đủ";
// let message = `${checkgioiTinh} ${name} ${age} tuổi ${checkDieuKien} đi NVQS`;
// console.log(message);
// if (age >= 18 && age <=27 ) {
//         if (gioiTinh == 0) {
//             console.log(`Bà ${name} ${age} tuổi ở ${address} đủ điều kiện đi NVQS`);
//         } else if(gioiTinh==1){
//             console.log(`Ong ${name} ${age} tuổi ở ${address} đủ điều kiện đi NVQS`);
//         }
//     }else{
//         if (gioiTinh == 0) {
//             console.log(`Bà ${name} ${age} không đủ điều kiện đi NVQS`);
//         }else if(gioiTinh==1){
//             console.log(`Ong ${name} ${age} tuổi không đủ điều kiện đi NVQS`);
//         }
//     }

// if (gioitinh == 1) {
//     if (age>=18 && age <=27) {
//         let msg = `Ong ${name} ${age} tuổi đủ điều kiện đi NVQS`;
//         console.log(msg);
//     }else{
//         let msg = `Ong ${name} ${age} tuổi không đủ điều kiện đi NVQS`;
//         console.log(msg);
//     }
// }else{
//     if (age>=18 && age <=27) {
//         let msg = `Bà ${name} ${age} tuổi đủ điều kiện đi NVQS`;
//         console.log(msg);
//     }else{
//         let msg = `Bà ${name} ${age} không đủ điều kiện đi NVQS`;
//         console.log(msg);
//     }
// }



// ÔN TẬP VÈ MẢNG
// let arr = [6,7,8,9];
// console.log[arr[2]];
// //Duyệt mảng là lấy các phần tử trong mảng ra để làm việc.
// for(let i= 0; i<arr.length;i++){
//     // console.log(arr[i]);
//     if (arr[i]%2==0) {
//         console.log(arr[i]);   
//     }
// }

// Ôn tập OBJECT (Đối tượng)
// let studentObject1 = [  // ArrayObject
//     {
//         ten: "Đỗ Hoàng Anh",
//         tuoi: "20",
//         diachi: "Ha Noi",
//     },
//     {
//         ten: "Đỗ Hoàng Banh",
//         tuoi: "21",
//         diachi: "Ha Noi 1",  
//     }
// ]
// for ( let i = 0; i < studentObject1.length; i++) {
//     console.log(studentObject1[i]);

// }
// for(let item of studentObject1){ // For of
//     console.log(item);
// } 


// Khai báo 1 list array object student gồm:
// ten,diachi,diemtoan,ly,hoa
// đếm xem trong dssv có bn bạn có điểm tbinh >=7 và bn <7 
// điểm tbinh tính theo : (toan+ly+hoa) /3;
// console.log(studentObject1[1].diachi);

let studenArrayObject = [
    {
        ten: "Hoang Anh",
        diachi: "Soc Son",
        diemtoan: 7,
        diemly: 8,
        diemhoa: 9,
    },
    {
        ten: "Huu An",
        diachi: "Soc Son 1",
        diemtoan: 5,
        diemly: 6,
        diemhoa: 4,
    },
    {
        ten: "Hai Dao",
        diachi: "Soc Son 3",
        diemtoan: 6,
        diemly: 8,
        diemhoa: 7,
    },
];
let tbtren7 = 0;
let tbduoi7 = 0;
let svtren7 = [];
let svduoi7 = [];
for (let i = 0; i < studenArrayObject.length; i++) {
    let diemtb = (studenArrayObject[i].diemtoan + studenArrayObject[i].diemly + studenArrayObject[i].diemhoa) / 3;
    if (diemtb >= 7) {
        // svtren7.push(studenArrayObject[i].ten);
        tbtren7++;
    } else {
        // svduoi7.push(studenArrayObject[i].ten);
        tbduoi7++;
    }
    // diemtb >=7 ? tbtren7++ : tbduoi7++;

}
console.log(`Số sinh viên có điểm trung bình >= 7: ${tbtren7}`);
// console.log(`Sinh viên có điểm trung bình >= 7 là: ${svtren7}`);
console.log(`Số sinh viên có điểm trung bình < 7: ${tbduoi7}`);
// console.log(`Sinh viên có điểm trung bình <7 là: ${svduoi7}`);



