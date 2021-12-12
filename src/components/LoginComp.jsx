import React from "react";


function LoginComp(){

return(
  <div className="login-box-holder">
  <div className="login-box">
<form className="login-form" autocomplete="off">
<span className="login-form-title">Sign In</span>
<div className="login-input-holder"><input type="username" placeholder="Username" name="username"></input></div>

<div className="login-input-holder"><input type="password" placeholder="Password" name="password"></input></div>
<button className="login-input-button" type="submit">Sign In</button>
</form>

<div className="googleAuth-holder">

<button onClick="" className="googleAuth-login-button" type="submit"><i class="fab fa-google"></i>Sign in with Google</button>
<span className="signup-text-link-login"> Don't have an account yet? <a href="">Sign Up</a></span>
</div>

  </div></div>
);

}

export default LoginComp;
