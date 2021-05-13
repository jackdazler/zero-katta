import loginLogo from "../images/login-logo.png"
const Logo = ()=>{
    return(
        <div className="bannar">
                 <img  className="logo-icon"src= {loginLogo} alt = "Logo"/>
                 <h5 className="logo-name">Zero Katta</h5>
        </div>

    );
}
export default Logo;