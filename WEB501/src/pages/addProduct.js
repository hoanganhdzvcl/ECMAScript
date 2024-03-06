import { router, useEffect } from "../lib"

const addProductPage = () => {
    useEffect(()=>{
        const addForm = document.querySelector("#add-form");
        const name = document.querySelector('#name');
        const price =  document.querySelector('#price');
        addForm.addEventListener("submit",(e)=>{
            e.preventDefault();//ngan load lai trang
            let newPost = {
                "name":name.value,
                "price":price.value
            }
            if(name.value.trim() == '' || price.value.trim()=='' ){
                alert("Vui long dien đầy đủ thông tin");
                return;
            }
            if (price.value<0) {
                alert("Vui lòng nhập giá lớn hơn 0");
            }
            fetch("http://localhost:3001/product",{
                method:"POST",
                body:JSON.stringify(newPost)
            }).then(()=>router.navigate("/product"))
        })
    })
    return /*html*/`
<form action = "" id="add-form">
    <div class="mb-3">
       <label  class="form-label">Name</label>
       <input type="text" class="form-control" id="name" >
</div>
<div class="mb-3">
      <label  class="form-label">Price</label>
     <input type="number" class="form-control" id="price" >
</div>
<button type="submit" class="btn btn-primary">Primary</button>
</form>
    `
}
export default addProductPage