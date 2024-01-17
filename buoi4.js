let days1 = ["mon", "tue", "wed"];
let days2 = ["third", "sat", "sun"];
// let days = days1.concat(days2);
//SPREED ARRAY là một tính năng trong ES 6 cho phép rải các phần tử của 1 mảng vào vị trí khác hoặc sao chép 
// các phần tử của một mảng vào một mảng mới.
let days = [...days1, ...days2];
console.log(days);
//Sao chép days1
let days1Cop = [...days1];

let students = ["huy", "an", "hung", "lan"];
//Sử dụng detructuring để tạo ra 2 biến lưu huy là lớp trưởng.
// an hùng lan là sinh vien
let [lopTruong, ...sinhVien] = students;
console.log(lopTruong);

let arrTeacherPoly = [
    {
        name: "Thắng",
        birth: 1996,
        team: 1 //web ,2:mobile
    },
    {
        name: "Tú",
        birth: 1993,
        team: 1
    },
    {
        name: "Sơn",
        birth: 1993,
        team: 2
    },
]
let arrTeacherIntern = [
    {
        name: "Hiển",
        birth: 2000,
        score: 5
    },
    {
        name: "Hiếu",
        birth: 1998,
        score: 6
    },
    {
        name: "Hiếu 1",
        birth: 1998,
        score: 8
    }
]

//Tạo 2 arrayObject là teacherMobilePoly,teacherWebPoly có sẵn 3 GV ở trong mỗi arrayObject
//Duyệt mảng arrTeacherPoly để tìm :
// Gv trong team web thì nhét vòa mảng teacherweb
//Gv nào trong team mobile thì nhét vào mobile

let teacherMobilePoly = [
    {
        name: "Hanh1",
        birth: 1992,
    },
    {
        name: "Hanh2",
        birth: 1993,
    },
    {
        name: "Hanh3",
        birth: 1994
    }
]
let teacherWebPoly = [
    {
        name: "Hai1",
        birth: 1994
    },
    {
        name: "Hai2",
        birth: 1995
    },
    {
        name: "Hai3",
        birth: 1999
    }
]

for (let { name, birth, team } of arrTeacherPoly) {
    if (team == 1) {
        teacherWebPoly = [...teacherWebPoly, { name, birth }];
    } else {
        teacherMobilePoly = [...teacherMobilePoly, { name, birth }];
    }
}
console.log("Thông tin giáo viên team Mobile: ", teacherMobilePoly);
console.log("Thông tin giáo viên team Web: ", teacherWebPoly);

//Duyệt mảng ArrayTeacherIntern nếu gv nào có score>5 thì đẩy vào arrayObject ArrTeacherPoly và bỏ thuộc tính score
for (let { name, birth, score } of arrTeacherIntern) {
    if (score > 5) {
        arrTeacherPoly = [...arrTeacherPoly, { name, birth }];
    }
}
// console.log(arrTeacherPoly);
//(VỀ THỬ FOR I xem được không)



function tich3so(a, b, c) {
    return a * b * c;
}
//Sử dụng bình thường 
tich3so(3, 4, 5);
// console.log(tich3so(3,4,5));
//Sử dụng spreed array để truyền vvaof trong đối số
let number = [2, 4, 5];
console.log(tich3so(...number));

// Rest Parameter
// Dùng để trong trường hợp không biết rõ trong hàm có bao nhiêu đối số
restTest(1, { id: 5 }, 3, 4, 5, 6, 7, 8, 9, 10);
function restTest(...args) {
    console.log(args);
}


// Xây dựng 1 hàm tích diện tích và chu vi nhiều hình chữ nhật
// Với mỗi đối số truyền vào sẽ là 1 object {chieudai:5,chieurong:4};
function chuVi(...HCN) {
    for (let { chieuDai, chieuRong } of HCN) {
        console.log(`DTich: ${chieuDai * chieuRong}`);
        console.log(`ChuVi: ${(chieuDai + chieuRong)*2}`);
    };
}
chuVi(
    {
        chieuDai:5,
        chieuRong:4
    },
    {
        chieuDai:8,
        chieuRong:3
    }
);


//   let getCountdownIterator = function *() {
//     let i = 10;
//     while( i > 1 ) {
//     yield --i;
//     }
//     }
    
//     console.log( [ ...getCountdownIterator() ] );