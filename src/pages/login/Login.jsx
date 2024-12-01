import { useRef } from 'react';
import style from './login.module.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
// const {togglehandle} = useContext(Foodprovider)

  // const navigate = useNavigate();
  let Email = useRef()
  let Password = useRef();
    const navigate = useNavigate()


  async function loginhandle(event){
    try{
   event.preventDefault();
   const payload = {
   email: Email.current.value,
   password: Password.current.value
   }
   const result = await axios.post('http://localhost:8080/api/user/login',payload,{
    withCredentials:true
   })
   console.log(result.data)
  }catch(e){
    console.log(e)
      navigate('/signup')
  }

  
  }
  return (
  
   <form action="" className={style.loginForm} onSubmit={loginhandle} >
    <p className={style.log_bar}>Login</p>
    <div className={style.Container_input}>
  <div >
  <label htmlFor="" >Email:</label>
    <input 
    type='text'
      ref={Email}
      name='email'
    />
    
  </div>
  <div >
  <label htmlFor="" >Password:</label>
   
    <input 
    type="password"
    ref={Password}
    name='password'
    />
    
  </div>
  <div className={style.btn}>
  <button type="submit" className="btn btn-warning" >LogIn</button>

  </div>
  
    </div>
   </form>
 
  )
}

export default Login;