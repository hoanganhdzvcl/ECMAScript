import { router, useEffect, useState } from "../libs"

const editTrangThai = (id)=>{
    const [trangthai,setTrangThai] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:3001/khachhang/${id}`)
        .then(response=> response.json())
        .then(data=>setTrangThai(data))
    },[])

    useEffect(()=>{
        const updateForm = document.querySelector("#update-form");
        const trangthai = document.querySelector("#trangthai");
        updateForm.addEventListener("submit",(e)=>{
            e.preventDefault();
            let newTrangThai = {
                "trangthai":trangthai.value
            }
            fetch(`http://localhost:3001/khachhang/${id}`,{
                method:'PATCH',
                body:JSON.stringify(newTrangThai)
            }).then(()=>router.navigate("/manageticket"))
            alert('Cập nhật thành công !')
        })
    })
    

    return`
    <div>
    <form action="" id="update-form">
    Thay đổi trạng thái: <select class = 'form-control' name="trangthai" id="trangthai">
        <option disabled selected >${trangthai.trangthai}</option>
        <option >Chờ xử lý</option>
        <option >Hoàn thành</option>
    </select> 
       <button class="btn btn-success" type='submit'> Update </button>
    </form>
</div>
    `

}
export default editTrangThai