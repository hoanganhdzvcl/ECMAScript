import { router, useEffect, useState } from "../libs"

const editCatTicket = (id)=>{
    const [cat,setCat] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:3001/danhmucve/${id}`)
        .then(response=> response.json())
        .then(data=>setCat(data))
    },[])

    useEffect(()=>{
        const updateForm = document.querySelector("#update-form");
        const danhmuc = document.querySelector("#danhmuc");
        updateForm.addEventListener("submit",(e)=>{
            e.preventDefault();
            let newCat = {
                "danhmuc":danhmuc.value
            }
            fetch(`http://localhost:3001/danhmucve/${id}`,{
                method:'PUT',
                body:JSON.stringify(newCat)
            }).then(()=>router.navigate("/intro"))
            alert('Sửa thành công !')
        })
    })
    

    return`
    <div>
    <form action="" id="update-form">
       Danh mục: <input class = 'form-control' type="text" id="danhmuc" value="${cat.danhmuc}"/>
       <button class="btn btn-success" type='submit'> Update </button>
    </form>
</div>
    `

}
export default editCatTicket