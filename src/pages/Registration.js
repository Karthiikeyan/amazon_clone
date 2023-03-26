import React, { useState } from 'react'
import { amazonlogo } from '../assets'
import { Link, useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import {motion} from 'framer-motion';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Registration = () => {
  const navigate = useNavigate()
  const auth = getAuth()
  // Client Details
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  // Error Message Details
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState();
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");
  const [firebaseErr, setFirebaseErr] = useState("");

  // Loading & Success message
  const [loading, setLoading] = useState(false);
  const[successMsg, setSuccessMsg] = useState("");

  const handleName = (e)=>{
    setClientName(e.target.value)
    setErrClientName("")
  }
  const handleEmail = (e)=>{
    setEmail(e.target.value)
    setErrEmail("")
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
    setErrPassword("")
  }
  const handleCPassword = (e)=>{
    setCPassword(e.target.value)
    setErrCPassword("")
  }

  const emailValidation = (email) =>{
    return String(email)
    .toLowerCase()
    .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
  }

  // Continue Button
  const handleRegistration=(e)=>{
    e.preventDefault()
    if(!clientName){
      setErrClientName("Enter your Name")
    }
    if(!email){
      setErrEmail("Enter your Email")
      setFirebaseErr("")
    }else{
      if(!emailValidation(email)){
        setErrEmail("Enter a valid Email")
      }
    }
    if(!password){
      setErrPassword("Enter your Password")
    }else{
      if(password.length < 6){
        setErrPassword("Password must be atleast 6 characters")
      }
    }
    if(!cPassword){
      setErrCPassword("Confirm your Password")
    }else{
      if(cPassword !== password){
        setErrCPassword("Password not matched")
      }
    }

    
    
    if(clientName && email && emailValidation(email) && password && cPassword && password.length >=6 && cPassword && cPassword=== password){
      setLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser,{
          displayName:clientName,
          photoURL:"https://www.jiocloud.com/l/?u=9ZGHfvYnj3J76d8BsVjNwQeK8lYPUREhjV9ELG_raVY=XPz",
        })
      // Signed in 
      const user = userCredential.user;
        setLoading(false)
        setSuccessMsg("Account created Successfully!")
        setTimeout(()=>{
          navigate("/signin")
        },3000)
      
      // ...
      })
      .catch((error) => {
      const errorCode = error.code;
      if(errorCode.includes("auth/email-already-in-use")){
        setFirebaseErr("Email Already in use, Try another one");
      }
      // ..
      });
      
      setClientName("");
      setEmail("");
      setPassword("");
      setCPassword("");
      setErrCPassword("");
      setFirebaseErr("");
    }
  }

  return (
    <div className='w-full'>
      <div className='w-full bg-gray-100 pb-10'>
        <form className='w-[400px] mx-auto p-4 flex flex-col items-center'>
            <Link to='/'>
            <img className='w-32' src={amazonlogo} alt="amazonlogo"/>
            </Link>
          <div className='w-full border border-zinc-300 p-6'>
            <h2 className='font-titleFont text-3xl font-medium mb-4'>
              Create Account
            </h2>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm font-medium'>Your Name</p>
                    <input onChange={handleName} value={clientName} className='w-full py-1 border border-zinc-400 px-2 text-base
                    rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                    duration:100' type="text"/>
                    {
                      errClientName && (
                        <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                          <span className='italic font-titleFont font-extrabold text-base'>!</span>
                          {errClientName}
                        </p>
                      )
                    }
                </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Email or Phone</p>
                <input onChange={handleEmail} value={email} className='w-full lowercase py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                 duration:100' type="email"/>
                 {
                  firebaseErr && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                      <span className='italic font-titleFont font-extrabold text-base'>!</span>
                      {firebaseErr}
                    </p>
                  )
                }
                {
                  errEmail && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                      <span className='italic font-titleFont font-extrabold text-base'>!</span>
                      {errEmail}
                    </p>
                  )
                }
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>password</p>
                <input onChange={handlePassword} value={password} className='w-full py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                 duration:100' type="password"/>
                {
                  errPassword && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                      <span className='italic font-titleFont font-extrabold text-base'>!</span>
                      {errPassword}
                    </p>
                  )
                  }
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Re-enter password</p>
                <input onChange={handleCPassword} value={cPassword} className='w-full py-1 border border-zinc-400 px-2 text-base
                rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput
                 duration:100' type="password"/>
                 <p className='text-xs text-gray-600 mt-[-7px]'>Password must be atleast 6 characters.</p>
                 {
                  errCPassword && (
                    <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                      <span className='italic font-titleFont font-extrabold text-base'>!</span>
                      {errCPassword}
                    </p>
                  )
                  }
              </div>
              <button onClick={handleRegistration} className='w-full py-1.5 text-sm font-normal
              rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b
              border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>
                Continue
              </button>
              {
                loading && (
                  <div className='flex justify-center'>
                    <RotatingLines
                    strokeColor="#febd69"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="50"
                    visible={true}
                    />
                  </div>
                )
              }
              {
                successMsg && (
                  <div>
                    <motion.p
                      initial={{ y:10, opacity: 0}}
                      animate= {{ y:0, opacity: 1}}
                      transition= {{ duration: 0.5}}
                      className='text-base font-titleFont font-semibold text-green-500 border-[1px]
                      border-green-500 text-center px-2'
                    >
                      {successMsg}
                    </motion.p>
                  </div>
                )
              }
            </div>
            <p className='text-xs text-black leading-4 mt-4'>By Continuing, you agree to
            Amazon's <span className='text-blue-600'>Conditions of Use{" "}</span>and{" "}
            <span className='text-blue-600'>Privacy Notice.</span></p>
            <p className='text-xs text-gray-600 mt-4 cursor-pointer group'>Already have an account?S{" "}
                <Link to='/signin'>
                    <span className='text-blue-600 group-hover:text-orange-700 group-hover:underline-offset-1 group-hover:underline'>
                        Sign in{" "}
                        <span><ArrowRightIcon/></span>
                    </span>
                </Link>
            </p>
            <p className='text-xs text-gray-600 mt-[-3px] cursor-pointer'>
            Buying for work? <span className='text-blue-600 hover:text-orange-700 hover:underline-offset-1 hover:underline'>Create a free business account</span>
            </p>
          </div>
          
          {/* <Link className='w-full' to='/registration'>
          <button className='w-full py-1.5 mt-4 text-sm font-normal rounded-sm
          bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border
          border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>
            Create your Amazon account
          </button>
          </Link> */}
          
        </form>
      </div>
      <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex
      flex-col gap-4 justify-center items-center py-10'>
        <div className='flex items-center gap-6'>
          <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>
            Conditions of Use
          </p>
          <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>
            Privacy Notice
          </p>
          <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>
            Privacy Notice
          </p>
        </div>
        <p className='text-xs text-gray-600'>© 1996-2023, ReactBd.com, Inc. or its affliates</p>
      </div>
    </div>
  )
}

export default Registration