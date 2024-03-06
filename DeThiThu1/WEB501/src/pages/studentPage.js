import { router, useEffect, useState } from "../lib"

const StudentPage = () =>{
 const [students,setStudent] = useState([]);

 useEffect(()=>{
    fetch('http://localhost:3001/sinhvien')
    .then((reponse)=>reponse.json())
    .then((data)=>setStudent(data))
 },[])
 useEffect(()=>{
    const btnDeletes = document.querySelectorAll("#btn-delete");
    for(let btn of btnDeletes){
        btn.addEventListener('click',()=>{
            let id = btn.dataset.id;
            if (confirm('Bạn chắc chắn xóa không ?')) {
                fetch(`http://localhost:3001/sinhvien/${id}`,{
                    method:"DELETE"
                }).then(()=>router.navigate("/student")); 
            }
        })
    }
 })

 return `
 <a class="btn btn-primary" href="/student/add" role="button">Thêm sinh viên</a>
 <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Tên</th>
      <th scope="col">Email</th>
      <th scope="col">Score</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  ${students.map(function(student){
    return`
    <tbody>
    <tr>
      <th scope="row">${student.id}</th>
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.score}</td>
      <td>
      <button type="button" class="btn btn-warning"><a href='/student/update/${student.id}'>Sửa</a></button>
      <button type="button" data-id=${student.id} class="btn btn-danger" id="btn-delete">Xóa</button>
      </td>
    </tr>
  </tbody>
    `
  })}
 
</table>
 `
}
export default StudentPage;