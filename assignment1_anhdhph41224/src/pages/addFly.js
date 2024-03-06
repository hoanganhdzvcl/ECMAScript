import { router, useEffect } from "../libs"

const addFlyPage = ()=>{
    useEffect(()=>{
       const addForm = document.querySelector('#add-form');
       const text = document.querySelector('#text');
       const gia = document.querySelector('#gia');
       addForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        let newFly = {
            "text":text.value,
            "gia":gia.value
        }
        fetch(`http://localhost:3001/ve`,{
            method:"POST",
            body:JSON.stringify(newFly),
        }).then(()=>router.navigate("/intro"))
        alert('Thêm thành công !');
       }); 
    })
    return /*html*/`
<form action = "" id="add-form">
    <div class="mb-3">
       <label  class="form-label">Chuyến bay: </label>
       <input type="text" class="form-control" id="text" >
       <label  class="form-label">Giá: </label>
       <input type="text" class="form-control" id="gia" >

</div>
<button type="submit" class="btn btn-primary">Thêm danh mục</button>
</form>
    `
}
export default addFlyPage