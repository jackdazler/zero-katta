const LoginFiled = ()=>{
    return(
 <div>
  <div className="mb-3">
    <label value="exampleInputEmail1" className="form-label" >Your e-mail</label>
    <input placeholder="name@domain.com" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label value="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" placeholder="at least 8 char" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" value="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</div>
   
   
    );
}
export default LoginFiled;