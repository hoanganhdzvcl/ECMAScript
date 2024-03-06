import data from '../../db.json';
import FooterComponent from '../components/footer';
import HeaderComponent from '../components/header';
const PostDetail = function(id){
    // Tra ra 1 object theo id dda truyen vao
    const post = data.posts.find((item)=> item.id == id);
    //Tra ve 1 object theo dieu kien nao do
    return `
    ${HeaderComponent()}
    <div>
         ID:${post.id}
         Title: ${post.title}
    </div>
    ${FooterComponent()}
    `
}
export default PostDetail;