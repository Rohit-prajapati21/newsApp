import { useRef, useState } from 'react';
import style from './signup.module.css'
import axios from 'axios'
function Signup() {
  let Name = useRef();
  let Email = useRef();
  let Password = useRef();

  async function signuphandle(event){
    event.preventDefault();
    const payload = {
     name : Name.current.value,
     email : Email.current.value,
     password : Password.current.value
    }
    const result = await axios.post('http://localhost:8080/api/user/signup',payload)
    console.log(result.data)
 
  }


  return (
    <form className={style.signupForm} onSubmit={signuphandle}>
      <p className={style.signup_bar}>Sign Up</p>
      <div className={style.form_box}>
        <div >
          <label htmlFor="">Name:</label>
          <input
            type="text"
            ref={Name}
            name='name'
          />
        </div>
        <div >
          <label htmlFor="">Email:</label>
          <input
            type="email"
            ref={Email}
            name='email'
          />
        </div>
        <div >
          <label htmlFor="">Password:</label>
          <input
            type="password"
            ref={Password}
            name='password'
          />
        </div>
        <div className={style.btn}>
        <button type="submit" className="btn btn-warning ">SignUp</button>
        </div>
      </div>
    </form>
  );
}

export default Signup;
