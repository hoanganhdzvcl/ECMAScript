import { router, useEffect, useState } from "../libs";

const editFlyPage = (id)=>{
    const [fly,setFly] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:3001/ve/${id}`)
        .then(response => response.json())
        .then(data=>setFly(data))
    },[0])
    
    useEffect(()=>{
        const updateForm = document.querySelector('#update-form');
        const text = document.querySelector('#text')
        const gia = document.querySelector('#gia')
        updateForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            let newFly = {
                "text":text.value,
                "gia":gia.value
            }
            fetch(`http://localhost:3001/ve/${id}`,{
                method:"PUT",
                body:JSON.stringify(newFly)
            }).then(()=>router.navigate('/intro'))
            alert('Sửa thành công');
        })
    })

    return`
    <div>

<form action="" id="update-form">
       Chuyến bay: <input class= "form-control" type="text" id="text" value="${fly.text}"/> </br>
       Giá: <input class= "form-control" type="text" id="gia" value="${fly.gia}"/> <br>
       <button class="btn btn-success" type='submit'> Update </button>
    </form>
</div>
    `
}
export default editFlyPage;