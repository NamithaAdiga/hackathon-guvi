import React from 'react'
import {useState} from "react";
import "./index.css"

function Index() {
     const [register,setRegister] = useState(false);
    // const[email,setEmail]=useState("")
    // const [password,setPassword]=useState("")
    // const [username,setUsername]=useState("")
    // const [loading,setLoading]=useState(false)
    // const [error,setError]=useState("")
    // const handleSignInGoogle=()=>{
    //     signInWithPopup(auth,provider).then((res)=>{
    //         console.log(res);
    //     })
    // }
    // const handleRegister=(e)=>{
    //     setError("")
    //     setLoading(true)
    //     if(email===""|| password===''||username===''){
    //         setError("Required field is missing")
    //     }else{
    //         createUserWithEmailAndPassword(auth,email,password).then((res)=>{
    //             setLoading(false)
    //             console.log(res)
                
    //         }).catch((error)=>{
    //             console.log(error)
    //             setError(error.message)
    //             setLoading(false)
    //         })
    //     }
    // }
    // const handleSignIn=(e)=>{
    //     e.preventDefault()
    //     setError("")
    //     setLoading(true)
    //     if(email===""|| password==='')
    //     {
    //         setError("required field is missing")
    //         setLoading(false)
    //     }else{
    //         signInWithEmailAndPassword(auth,email,password).then((res)=>{
    //             console.log(res)
    //             setLoading(false)
    //         }).catch((error)=>{
    //             console.log(error.code)
    //             setError(error.message)
    //             setLoading(false)
    //         })
    //     }
    // }
    return (
        <div className='auth'>
            <div className='auth-container'>
                 <p>Add another way to log in using any of the following services</p>
                 <div className='sign-options'>
                 <div 
                //  onClick= {handleSignInGoogle} 
                 className='single-option'>
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" 
                    alt="google" />
                    <p>Login with google</p>
          </div>   
        </div>
        <div className='auth-login'>
        <div className='auth-login-container'>
            {
                register?(
                    <>
                    <div className='input-field'>
                        <p>Username</p>
                        <input 
                        // value={username}
                        // onChange={(e)=>setUsername(e.target.value)}
                        type="text" />
                  </div>
                  <div className='input-field'>
                        <p>Email</p>
                        <input 
                        // value={email}
                        // onChange={(e)=>setEmail(e.target.value)}
                        type="email" />
                  </div>
                  <div className='input-field'>
                        <p>Password</p>
                        <input 
                        // value={password}
                        // onChange={(e)=>setPassword(e.target.value)}
                        type="password" />
                  </div>
                  <button 
                //   onClick={handleRegister}
                  style={{marginTop:"10px",}}>
                      Register</button>
                    </>
                ) : (
                    <>
                    <div className='input-field'>
                        <p>Email</p>
                        <input 
                        // value={email}
                        // onChange={(e)=>setEmail(e.target.value)}
                        type="email" />
                  </div>
                  <div className='input-field'>
                        <p>Password</p>
                        <input 
                        // value={password}
                        // onChange={(e)=>setPassword(e.target.value)}
                        type="password" />
                  </div> 
                  <button style={{marginTop:"10px",}}>
                  {/* onClick={handleSignIn} {loading ? 'Signing In...';}
                  */}
                   Login</button>
                  </>
                )}
                <p onClick={()=>setRegister(!register)}
                          style={{marginTop:"10px",
                           textAlign:"center",
                           color:"#0095ff",
                           textDecoration:"underline",
                           cursor:"pointer"
            }}>{register ? "Login" : "Register"}</p>
            </div>
        </div>
      </div>
    </div>
    )
}

export default Index
