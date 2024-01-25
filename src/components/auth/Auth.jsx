import React, { useRef, useState } from 'react'
import axios from 'axios';
import { checkValidData } from '../../utils/validate';
import styles from './auth.module.css'
import toast, { Toaster } from 'react-hot-toast';
import BASE_URL from '../../utils/constants';
import { useNavigate } from 'react-router-dom'
const Auth = () => {
  const [signup,setSignup] = useState(true);
  const navigate = useNavigate();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const handleSignUp = async()=>{
    const userName = name.current.value;
    const userEmail = email.current.value;
    const userPassword = password.current.value;
    const userConfirmPassword = confirmPassword.current.value;
    const message = checkValidData(userName,userEmail,userPassword,userConfirmPassword);
    if(!message){
      try {
        const data = {userName,userEmail,userPassword};
        const response = await axios.post(`${BASE_URL}/signup`,
        data);
        toast.success(response.data.message);
        console.log(response);
        window.localStorage.setItem("token",response.data.data[1].token);
        setTimeout(() => {
          setSignup(false);  
        }, 1000);
      } catch (error) {
        console.log(error);
        toast(error.response.data.message, {
          icon: '⚠',
        });
      }
    }else{
      toast(message,{
        icon:'⚠'
      });
    }
  }
  const handleSignIn =async ()=>{
    const userEmail = email.current.value;
    const userPassword = password.current.value;
    const data = {userEmail,userPassword};
    try {
      const response = await axios.post(`${BASE_URL}/login`,data);
      console.log(response);
      toast.success(response.data.message);
      window.localStorage.setItem("token",response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      toast(error.response.data.message, {
        icon: '⚠',
      });
    }
  }
  const handleModeSignup =()=>{
    setSignup(true);
  }
  const handleModeLogin=()=>{
    setSignup(false);
  }

  return (
    <div className={styles.body}>
        <Toaster/>
        <div className={styles.auth__form__container}>
            <span className={styles.logo}>QUIZZIE</span>
            <div className={styles.auth__choice__container}>
              <button className={signup ?styles.active__button:""}
              onClick={handleModeSignup}
              >
              Sign Up
              </button>
              <button className={!signup ? styles.active__button : ""}
              onClick={handleModeLogin}
              >
              Log In
              </button>
            </div>
           <div className={styles.form__container}>
            <form onSubmit={(e)=>(e.preventDefault())}>
            {signup&&(<div className={styles.input__container}>
              <label>Name</label>
              <input
              type='text'
              ref={name}
              />
            </div>)}
            <div className={styles.input__container}>
              <label>Email</label>
              <input
              type='email'
              ref={email}
              />
            </div>
            <div className={styles.input__container}>
              <label>Password</label>
              <input
              type='password'
              ref={password}
              />
            </div>
            {signup && (<div className={styles.input__container}>
              <label>Confirm Password</label>
              <input
              type='password'
              ref={confirmPassword}
              />
            </div>)}
            <div className={styles.submit__button}>
              <button
              type='submit'
              onClick={signup ? handleSignUp : handleSignIn}
              >
              {signup ? "Sign-Up" : "Log In"}
              </button>
            </div>
            </form>
           </div>
        </div>
    </div>
  )
}

export default Auth