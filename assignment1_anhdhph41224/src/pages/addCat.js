import { router, useEffect } from "../libs"

const addCatPage = ()=>{
    useEffect(()=>{
       const addForm = document.querySelector('#add-form');
       const danhmuc = document.querySelector('#danhmuc');
       addForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        let newCat = {
            "danhmuc":danhmuc.value
        }
        fetch(`http://localhost:3001/danhmucve`,{
            method:"POST",
            body:JSON.stringify(newCat),
        }).then(()=>router.navigate("/intro"))
        alert('Thêm thành công !');
       }); 
    })
    return /*html*/`
<form action = "" id="add-form">
    <div class="mb-3">
       <label  class="form-label">Tên danh mục vé</label>
       <input type="text" class="form-control" id="danhmuc" >
</div>
<button type="submit" class="btn btn-primary">Thêm danh mục</button>
</form>
    `
}
export default addCatPage;

