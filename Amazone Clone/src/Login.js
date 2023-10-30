import React, { useState } from "react";
import "./Login.css";
import { Link , useHistory } from "react-router-dom";
import { auth } from "./firebase";



function Login() {
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const history = useHistory();
const signIn = (event) =>{
  event.preventDefault();

  auth
       .signInWithEmailAndPassword(email,password)
       .then(auth=>{
        history.push('/')
       })
       .catch(error=>{
        alert(error.message)
       })
}


const register = (event) => {
  event.preventDefault();
  auth
  .createUserWithEmailAndPassword(email,password)
  .then((auth)=>{
    // if successfully created new user with email and password
    // console.log(auth);
    if(auth){
        history.push('/')
    }
  } 
  )
  .catch(error=> alert(error.message));
  
        
}
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
          alt="img"
          className="login-logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>Email</h5>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="passwword"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' className="login-signin-button" onClick={signIn}>
          SignIn</button>
        </form>

        <p>
          By signing-in you agree to amazon clone's conditions of use &
          sale.please see your Privacy Notice, our Cookies Notice and our
          Intrest-Based Ads Notice.
        </p>
        <button className="login-register-button"
        onClick={register}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
