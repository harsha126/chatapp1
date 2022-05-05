import React from 'react'
import { auth,database } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
function SignUp() {
  const [data,setData] = React.useState({
    name : "",
    email : "",
    password : "",
    error : null,
    loading : false
  });

  const { name , email, password,error,loading} = data;

  const handleChange = e =>{
    setData({...data,[e.target.name] : e.target.value})
  } 

  const handleSubmit = async e =>{
    e.preventDefault();
    setData({...data,error:null,loading:true})
    if(!name || !email || !password){
      setData({...data,error:"Required All Feilds"})
    }
    try{
      setData({...data,loading:true}) 
      const result = await createUserWithEmailAndPassword(auth,email,password)
      setData({ ...data, loading: false }); 
    }
    catch(err){
      setData({...data,error:err.message,loading:false})
    }
  }
  
  return (
    <form className="lcontainer" onSubmit={handleSubmit}>
      <div className="SignUpContainer">
        <h2>
          <b>Sign Up</b>
        </h2>
        <input
          type="text"
          placeholder="First & Last Name"
          className="login-input"
          name='name'
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Username(Email)"
          className="login-input"
          name='email'
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          name='password'
          value={password}
          onChange={handleChange}
          required
        />
        {error ? <p className='error'>{error}</p>:null}
        <input type="submit" value="SignUp" className="login-button" required />
        <div>
          <p>
            Have An Account?{" "}
            <a href="#su" className="signup" onClick="xys();">
              Log In
            </a>
          </p>
        </div>
      </div>
    </form>
  );
}

export default SignUp