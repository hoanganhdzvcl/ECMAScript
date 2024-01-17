let color = ["red", "green", "blue"];
// let firstColor = color[0];
// let secondColor = color[1];
// let thirdColor = color[2];

//es6 detructuring array
let [firstColor, secondColor, thirdColor] = color;
console.log(`${firstColor}, ${secondColor}, ${thirdColor}`);


// Detructuring object
let person = { name: "Hanh", age: 30, city: "HaNoi" };
// let name = person.name;
let { name: a, age: b, city: c } = person;
console.log(`${a},${b},${c}`);



let sinhVien = {
    monHoc: [
        {
            Toan: 9,
            Ly: 10,
            Hoa: 6
        }
    ]
}
//Không su dung detructuring de lay gia tri toan,ly,hoa
// Sử dụng detructuring để lấy giá trị của toán,lý,hóa

// let diemToan = sinhVien.monHoc[0].Toan;
// let diemLy = sinhVien.monHoc[0].Ly;
// let diemHoa = sinhVien.monHoc[0].Hoa;
// console.log(`
// Điểm toán: ${diemToan}
// Điểm lý : ${diemLy}
// Điểm hóa: ${diemHoa}
//  `);

let {
    monHoc: [
        {
            Toan: t1,
            Ly: l1,
            Hoa: h1
        }
    ]
} = sinhVien
console.log(`${t1},${l1},${h1}`);


//Không su dung detructuring de lay gia tri toan,ly,hoa
// Sử dụng detructuring để lấy giá trị của toán,lý,hóa
//Sử dụng detructuring trong for
let arrTeacher = [
    {
        ten: "thanghq",
        namSinh: 1996,
        tinhtranghonnhan: 0,//0 là độc thân 1 là có gđ
        luong: 3000,
        monHoc: ["ECMA", "PHP2"]
    },
    {
        ten: "tuva9",
        namSinh: 1993,
        tinhtranghonnhan: 0,//0 là độc thân 1 là có gđ
        luong: 6000,
        monHoc: ["ECMA", "PHP2"]
    },
    {
        ten: "ngocbq",
        namSinh: 1987,
        tinhtranghonnhan: 1,//0 là độc thân 1 là có gđ
        luong: 8000,
        monHoc: ["JS NÂNG CAO", "PHP2"]
    },
    {
        ten: "huynx",
        namSinh: 1988,
        tinhtranghonnhan: 0,//0 là độc thân 1 là có gđ
        luong: 9000,
        monHoc: ["HTML&CSS", "PHP2"]
    },
    {
        ten: "dinhtv",
        namSinh: 1993,
        tinhtranghonnhan: 0,//0 là độc thân 1 là có gđ
        luong: 6000,
        monHoc: ["ECMA", "JS"]
    },
]
let ECMATeacher =0;
for (let { ten, namSinh, tinhtranghonnhan, luong, monHoc } of arrTeacher) {
    let tuoi = new Date().getFullYear() - namSinh;
    let tinhTrangHonNhan = tinhtranghonnhan == 0 ? (tuoi > 30 ? 'Ế' : 'Chưa có gia đình') : 'Đã có gia đình';
    let dem=0;
    
    console.log(`
    Tên giảng viên: ${ten},
    Năm sinh: ${namSinh},
    Tình trạng hôn nhân: ${tinhTrangHonNhan},
    Lương: ${luong},
    Môn giảng dạy: ${monHoc}`);

    if (monHoc.includes("ECMA")) {
        ECMATeacher++;
    }
 }
 console.log(`So GV day ECMA la: ${ECMATeacher}`);

//Thêm 3 giảng vviene có thuộc tính tương tự vào ArrayList trên.
//Hiển thị đầy đủ thông tin của giảng viên trong ArrayList trên.
// Kiểm tra những gv nào trên 30 tuổi mà tình trạng hôn nhân là độc thân thì hiển thị ra là ế
//Đếm xem có bao nhiêu Gv dạy dc môn học ECMA.