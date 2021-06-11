import React from 'react'
import './SignUp.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const SignUp=()=>{
    return (<>
    <h1>dd</h1>
  <form action="/action_page.php" style={{border:"1px solid #ccc"}}>
  <div class="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to creatddde an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
    
    <label>
      <input type="checkbox" checked="checked" name="remember" style={{marginbottom:"15px"}}/> Remember me
    </label>
    
    <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button type="button" class="cancelbtn">Cancel</button>
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
</form>

    </>)
}

export default SignUp