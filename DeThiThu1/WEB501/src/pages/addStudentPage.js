import { router, useEffect } from "../lib"

const addStudentPage = () =>{
    useEffect(()=>{
        const addForm =  document.querySelector('#add-form');
        const name = document.querySelector('#name');
        const email = document.querySelector('#email');
        const score = document.querySelector('#score');
        addForm.addEventListener("submit",(e)=>{
            e.preventDefault();
            let newStudent = {
                "name":name.value,
                "email":email.value,
                "score":score.value
            }
            if (name.value.trim()=='' || score.value.trim()=='' || email.value.trim()==''){
                alert("Vui lòng điền đầy đủ thông tin");
                return;
            }
            if (score.value <0) {
                alert("Điểm >=0");
                return;
            }
            fetch(`http://localhost:3001/sinhvien`,{
                method:'POST',
                body:JSON.stringify(newStudent)
            }).then(()=>router.navigate("/student"))
            alert("Thêm sinh viên thành công !");
        })

    })
    return /*html*/ `
    <form action = '##' id='add-form'>
    <div class="input-group input-group-sm mb-3">
    <span class="input-group-text" id="inputGroup-sizing-sm">Ten:</span>
  <input id = "name" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Email:</span>
  <input id = "email" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>
<div class="input-group input-group-sm mb-3">
  <span class="input-group-text" id="inputGroup-sizing-sm">Score</span>
  <input id = "score" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
</div>
<button type="submit" class="btn btn-success">Thêm sinh viên</button>
    </form>
    `
}
export default addStudentPage;