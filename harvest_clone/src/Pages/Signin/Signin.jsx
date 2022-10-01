import { Box, Button, FormControl, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signinAPI } from '../../Store/auth/auth.actions';
import styles from "./Signin.module.css";

const initData={
  email:"",
  password:"",
}

const Signin = () => {
const [userData,setUserData] = useState(initData);
const token = useSelector((store)=>store.auth.token)
 console.log(token)
 const navigate = useNavigate();
const dispatch = useDispatch();
const {email,password} = userData;

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setUserData({...userData,[name]:value})
};

const handleSubmit = (e)=>{
  e.preventDefault();
  console.log("clicked")
  dispatch(signinAPI(userData))
  navigate("/time")
};

useEffect(()=>{
  if(token){
    navigate("/time");
  }
},[token,navigate])
  return (
    <Box  >
      <Text pt="60px" pb="20px" fontSize="3xl" fontWeight="bold">Sign in to Harvest</Text>
      <Box className={styles.signinSection}>
       <Button marginTop="20px" width="100%" backgroundColor="#FFFFFF" border="1px solid #beb6b6">
       Sign up with Google
     </Button>
     <Text marginTop="20px">or with your email below</Text>
     <FormControl method="POST">
     <Input backgroundColor="white" marginTop="20px" value={email} onChange={handleChange} type='email' name='email' placeholder='Work email' />
      <Input backgroundColor="white" marginTop="10px" value={password} onChange={handleChange}  type='password' name='password' placeholder='Password'/>
      <Button onClick={handleSubmit}  marginBottom="20px" marginTop="20px" color="white" height="50px" width="100%" backgroundColor="#11742A" borderRadius="20px">Sign In</Button>
    </FormControl>
     </Box>
     <Text pt="20px" pb="120px">Forgot password? Terms of service Privacy policy</Text>
    </Box>
  )
}

export default Signin




