import { Button } from '@mui/material'
import React, { useState } from 'react'
import {signInWithPopup} from "firebase/auth"
import { auth, googleAuthProvider } from '../firebase/setup'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    const [user,setUser] = useState(false)

   const signup = async()=>{
    try{
       const data = await signInWithPopup(auth,googleAuthProvider)
       data && setUser(true)
    }catch(err){
        console.error(err)
    }  
   }

   const search = ()=>{
     navigate("/dictionary")
   }

  return (
    <div style={{position:"fixed",left:"45%",top:"30%"}}>
        <h2>LET'S <br/>START<br/> TO EXPLORE</h2>
      {user ? <Button variant='contained' sx={{bgcolor:"#FCE181",color:"black"}} onClick={search}>Search meaning</Button> : 
      <Button onClick={signup} variant='contained' sx={{bgcolor:"black"}}>Signup</Button>}
    </div>
  )
}

export default Home
