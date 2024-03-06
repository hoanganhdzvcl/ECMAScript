import { router, useEffect, useState } from "../libs"

const UpdatePostPage = (id) => {
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3001/product/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }, []) // nếu có [] component đó chỉ được gọi 1 lần
    useEffect(()=>{
        
        const updateForm = document.querySelector("#update-form");
        const name = document.querySelector("#name");
        const price = document.querySelector("#price");
        updateForm.addEventListener("submit", (e) => {
            e.preventDefault();//Ngan su kien load lai trang
            let newPost = {
                "name": name.value,
                "price": price.value
            }
            fetch(`http://localhost:3001/product/${id}`, {
                method: 'PUT', //API them Method la POST.
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPost) // Ep lai kieu data de gui len api

            }).then(()=>router.navigate("/contact"))
        })
    })

    return `
        <div>
            <form action="" id="update-form">
               Title <input type="text" id="name" value="${post.name}"/>
               Views <input type="text" id="price" value="${post.price}"/>
               <button type='submit'> Update </button>
            </form>
        </div>
    `
}
export default UpdatePostPage;