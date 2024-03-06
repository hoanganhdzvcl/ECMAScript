import { router, useEffect } from "../libs";

const AddPostPage = () => {
    useEffect(() => {
        //Viet code trong useEffect
        const addForm = document.querySelector('#add-form');
        const name = document.querySelector("#name");
        const price = document.querySelector("#price");
        addForm.addEventListener("submit", (e) => {
            e.preventDefault();//Ngan su kien load lai trang
            let newPost = {
                "name": name.value,
                "price": price.value
            }
            fetch("http://localhost:3001/product", {
                method: 'POST', //API them Method la POST.
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPost) // Ep lai kieu data de gui len api

            }).then(()=>router.navigate("/contact"))
        })
    })
    return `
    <div>
    <form action="#" id="add-form">
    Name: <input type="text" id="name"/>
    Price: <input type="text" id="price"/>
    <button type="submit"> Add New </button>
    </form>
    </div>
    `
}
export default AddPostPage;