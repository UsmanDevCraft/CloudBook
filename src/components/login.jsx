import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const login = (props) => {

    const [creds, setCreds] = useState({email:"", password:""})
    const history = useHistory();

    const onSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch(`https://cloud-book-backend-eta.vercel.app/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({email: creds.email, password: creds.password}),
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            localStorage.setItem('token', json.authToken);
            history.push('/home');
            props.showAlert("Login Successfull", "success");
          } else {
            props.showAlert("Invalid Attempt, Try Again", "danger");
          }
    };

    const style = {
      cursor:"pointer",
    };

    const changeHistory = ()=>{
      history.push('/signup');
    };

    const onChange = (e) =>{
        setCreds({...creds, [e.target.name]:e.target.value})
    };

  return (
    <div className='container my-5'>
      <h1>Login Your Account</h1>
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label my-1">Email address</label>
                <input type="email" onChange={onChange} className="form-control" name='email' id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" onChange={onChange} className="form-control" name='password' id="password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <code>Don't have an account? Signup <u style={style} onClick={changeHistory}>here</u>.</code>
    </div>
  )
}

export default login
