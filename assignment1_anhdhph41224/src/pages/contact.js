import '../../style.css';
import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";
const ContactPage = function () {
    return `
    ${HeaderComponent()}
    <div class="contactPage">
    <h1>Liên hệ với chúng tôi</h1>
    <h3>Gmail:</h3>
    <p>- anhdhph41224@fpt.edu.vn</p>
    <h3>Hotline:</h3>
    <p>- 0333745950</p>
    <h3>MSSV:</h3>
    <p>- PH41224</p></div>
    
       
    ${FooterComponent()}
    `;
}

export default ContactPage;