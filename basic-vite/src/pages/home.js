import FooterComponent from "../components/footer"
import HeaderComponent from "../components/header";

const HomePage = function(){
    return `
    ${HeaderComponent()}
    <h1>Trang chủ</h1>
    ${FooterComponent()}
    `
}
export default HomePage;