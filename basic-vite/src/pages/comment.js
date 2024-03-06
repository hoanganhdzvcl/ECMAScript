import FooterComponent from "../components/footer"
import HeaderComponent from "../components/header";
import { comments } from '../../db.json' assert {type: 'json'}; // posts la ten bang.
const CommentPage = function () {
    console.log(comments); // posts la 1 mang dataobject
    return `
    ${HeaderComponent()}
    <h1>Trang Comment</h1>
    <table class= border 1px>
       <tr>
          <td>id</td>
          <td>title</td>
          <td>PostId</td>

       </tr>
       ${comments.map(function(comment){
       return`<tr>
          <td>${comment.id}</td>
          <td>${comment.text}</td>
          <td>${comment.postId}</td>
       </tr>`
       })}
    </table>
    ${FooterComponent()}
    `
}

// Tạo 1 page comment và đổ dữ liệu ra bảng comment
export default CommentPage;