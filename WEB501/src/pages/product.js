import { router, useEffect, useState } from "../lib";
const productPage = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/product')
            .then((reponse) => reponse.json())
            .then((data) => setProduct(data))
    }, [])
    useEffect(()=>{
        const btnDeletes = document.querySelectorAll(".btn-danger");
        for(let btn of btnDeletes){
            btn.addEventListener("click",()=>{
                let id = btn.dataset.id;
                if (confirm("Bạn chắc chắn muốn xóa sản phẩm này ?")) {
                  fetch(`http://localhost:3001/product/${id}`, {
                      method: "DELETE"
                  }).then(() => router.navigate("/product"));
              }
                
            })
        }
    })
    return `
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  ${products.map(function (product) {
        return `
    <tbody>
    <tr>
      <th scope="row">${product.id}</th>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>
      <button type="button" class="btn btn-secondary"><a href='/edit-product/${product.id}'>Sửa</a></button>
      <button   type="button" data-id=${product.id} class="btn-danger">Xóa</button>
      </td>
    </tr>
  </tbody>
    `
    })}
  
</table>
<a class="btn btn-primary" href="/product/add" role="button">Thêm sản phẩm</a>
    `
}
export default productPage;