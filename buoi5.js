// Arrow Function.
const add = (a, b) => {
    return a + b;
}
//Nếu như chỉ có một biêu thức chúng ta hoàn toàn có thể viết ngắn gọn như sau:
const add1 = (a, b) => a + b;
//Viết hàm sau đó truyền tham số chạy được luôn
const add2 = ((a, b) => {
    return a + b;
})(7, 8);
console.log(add2);
console.log(add(5, 6));

// Sử dụng Arrow Function để viết hàm tính diện ticchs của nhiều hình chữ nhật 
// Với tham số truyền vào là nhiều đối tượng hình chữ nhật

const dienTich = ((...HCN) => {
    for (let { chieudai, chieurong } of HCN)
        console.log(`Diện tích HCN là: ${chieudai * chieurong} `);
})
    (
        {
            chieudai: 5,
            chieurong: 3
        },
        {
            chieudai: 6,
            chieurong: 4
        }
    );
// dienTich;

//1 số hàm có sẵn sử dụng arrow function
// map được sử dụng để tạo ra một mảng mới bằng cách
// ánh xạ tất cả phần tử của 1 mảng cũ
let numbers = [1, 2, 3, 4, 5, 6];
let doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);

// tạo 1 mảng HCN sau :
let hcn = [{ cd: 8, cr: 6 }, { cd: 7, cr: 6 }, { cd: 9, cr: 6 }];
// Sử dụng map để tạo ra 1 mảng lưu diện tích của các HCN trên
let dt = hcn.map(({ cd, cr }) => cd * cr);
console.log(dt);

let numberString = ["1", "2", "3", "4", "5", "6"];
// Tạo ra 1 mảng mới biến các chuỗi thành các số.
let numberINT = numberString.map((n) => +n); // n là cái tham số ở trong mảng numberstring
// console.log(numberString);
console.log(numberINT);

let teacher = [{ id: 1, name: "Thắng" }, { id: 2, name: "Tú" }];
//Tạo ra 1 mảng mới chỉ để lưu tên giảng viên.
let inforTeacher = teacher.map((teacher) => teacher.name);
console.log(inforTeacher);


let students = [
    { id: 1, name: "Huy", namsinh: 2003, toan: 7, ly: 8, hoa: 9 },
    { id: 2, name: "Toàn", namsinh: 2004, toan: 0, ly: 0, hoa: 10 }
]
//Tạo ra 1 mảng inforStudent chỉ lưu ttin sau {id,name,tuoi,diemtb}
// tuoi = namhientai - namsinh
// diem tb :toanlyhoa/3
let inforStudent = students.map((student) => {
    return {
        id: student.id,
        name: student.name,
        diemtb: (student.toan+student.ly+student.hoa)/3,
        tuoi : new Date().getFullYear() - student.namsinh
    }

});
console.log(inforStudent);

