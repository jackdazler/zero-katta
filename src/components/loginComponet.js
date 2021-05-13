
import LoginFiled from "./loginFieldComponent"
import Logo from "./logoComponent"
const LoginPage = ()=>
{
    return(
        <div className="main">
        <Logo>

        </Logo>
        <div className = "login-page card">

          <div className="login-text card-body">
             
              <h1>Log in.</h1>
              <p>Log in with your data that you entered during your registartion.</p>
          </div>
          <div className="login-fields card-body">
           
           <LoginFiled/>
         
          </div>

        </div>

        </div>
    );
}
export default LoginPage ;