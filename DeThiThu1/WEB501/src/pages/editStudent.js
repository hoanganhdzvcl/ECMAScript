import { router, useEffect, useState } from "../lib";

const editStudent = (id)=>{
    const  [students,setStudent] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:3001/sinhvien/${id}`)
        .then(reponse=>reponse.json())
        .then(data=>setStudent(data))
    },[0])

    useEffect(()=>{
        const updateForm  = document.querySelector('#update-form');
        const name = document.querySelector('#name');
        const email = document.querySelector("#email");
        const score = document.querySelector('#score');
        updateForm.addEventListener('submit',(e) =>{
            e.preventDefault();
            let newStudent = {
                "name":name.value,
                "email":email.value,
                "score":score.value
            }
            fetch(`http://localhost:3001/sinhvien/${id}`,{
                method:'PUT',
                body:JSON.stringify(newStudent)
            }).then(()=>router.navigate('/student'))
            alert("Cập nhật thành công !");
        })
    })

    return`
    <form action = '##' id='update-form'>
    <div class="input-group input-group-sm mb-3">
    <span class="input-group-text" id="inputGroup-sizing-sm">Ten:</span>
  <input id = "name" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value = "${students.name}">
</div>
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Email:</span>
  <input id = "email" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value = "${students.email}">
</div>
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Score</span>
  <input id = "score" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value = "${students.score}">
</div>
<button type="submit" class="btn btn-success">Update</button>
<a class="btn btn-primary" href="/student" role="button">Danh sách</a>
    </form>
    `
}
export default editStudent;