// Hàm filter (Hàm tạo ra 1 mảng mới theo điều kiện lọc)
let numbers1 = [1,2,3,4,5,6];
// Tạo ra 1 mảng mới theo điều kiện là các phần tử là số chẵn.
let eventNumber = numbers1.filter((num)=>num%2===0);
console.log(eventNumber);

//Hàm reduce// Tính tổng các phần tử trong mảng
let numbers2 = [1,2,3,4,5];
let sum = numbers2.reduce((total,num)=>total+num,0); // 0 là sẽ cộng thêm 1 giá trị nào đấy
// Total giá trị đầu tiên = 0,cộng từng phần tử trong mảng sau đó cập nhật giá trị của total.
// console.log(sum);

//
let students1 = [
    {"id":1,"name":"Thang",age:15},
    {"id":2,"name":"Huy",age:25}
]
// Dùng reduce để tính tổng tuổi.
// Dùng filter để lọc ra những đối tượng có tuổi >18.

let sumTuoi = students1.reduce((tong,student)=>tong+student.age,0);
console.log(sumTuoi);

let filterAge = students1.filter((student)=> student.age>18);
console.log(...filterAge);