import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Signup = (props) => {

  const [creds, setCreds] = useState({name:"",email:"", password:"", cpassword:""})
  const history = useHistory();
  const {name, email, password, cpassword} = creds;

  const onSubmit = async (e)=>{
        if (password !== cpassword) {
          e.preventDefault();
          props.showAlert("Please write the password correctly and same","danger");
        } else {
          e.preventDefault();
      const response = await fetch(`https://cloud-book-backend-eta.vercel.app/api/auth/createuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({name, email, password}),
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
          localStorage.setItem('token', json.authToken);
          history.push('/');
          props.showAlert("Account Created Successfully", "success");
        } else {
          props.showAlert("Invalid Attempt, Try Again", "danger");
        };
        };
  };

  const style = {
    cursor:"pointer"
  };

  const onChange = (e) =>{
      setCreds({...creds, [e.target.name]:e.target.value})
  };

  const changeHistory = ()=>{
    history.push('/login');
  };

  return (
    <div className='container my-4'>
      <h1>Sign Up here</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name='name' onChange={onChange} id="name" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' onChange={onChange} id="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' onChange={onChange} id="password" required minLength={5} />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" name='cpassword' onChange={onChange} id="cpassword" required minLength={5} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <code>Already have an account? Login <u style={style} onClick={changeHistory}>here</u>.</code>
    </div>
  )
}

export default Signup
