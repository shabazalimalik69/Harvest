import { Box, Button, FormControl, Grid, GridItem, Image, Input, Link, Text } from '@chakra-ui/react';
import React from 'react'
import { useState,useNavigate } from 'react';
import styles from "./Signup.module.css";

const initData={
    firstName:"",
    lastName:"",
    companyName:"",
    email:"",
    password:"",
}

const SignupSection = () => {
    const [userData,setUserData] = useState(initData);
    // const navigate = useNavigate()
    const {firstName,lastName,companyName,email,password} = userData;
    
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setUserData({...userData,[name]:value})
    };

    const handleCreate = async(e)=>{
        e.preventDefault();

        let response = await fetch("http://localhost/8000/users/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({firstName,lastName,companyName,email,password})
        })
        const data = await response.json();
        if(data.status===422 || !data){
            alert("Not Valid User");
            console.log("Not valid user");
        }else{
            alert("Account Created Successfully");
            console.log("Account Created Successfully");
            // navigate("/signin");
        }
    }

  return (
    <Box className={styles.signupSection}>
    <GridItem className={styles.gridItem2}>
     <Text className={styles.text4} >Get a FREE Trial</Text>
     <Text marginTop="10px">No credit card required</Text>
     <Button justifyContent="space-between" marginTop="20px" width="100%" backgroundColor="#FFFFFF" border="1px solid #beb6b6">
       <Image display="block" alignItems="start" width="20px"  height="20px" src="data:image/png;base64,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"/>
       <Text className={styles.text3} >Sign up with Google</Text>
     </Button>
     <Text marginTop="20px">or with your email below</Text>
     <FormControl method="POST">
       <Grid className={styles.grid2}>
       <Input value={firstName} onChange={handleChange} type='text' name='firstName' placeholder='First name' />
       <Input value={lastName} onChange={handleChange} type='text' name='lastName' placeholder='First name' />
       <Input value={companyName} onChange={handleChange} type='text' name='companyName' placeholder='Company name' />
       <Input value={email} onChange={handleChange} type='email' name='email' placeholder='Work email' />
       <Input value={password} onChange={handleChange} className={styles.input} type='password' name='password' placeholder='Password' />
       </Grid>
     </FormControl>
     <Button onClick={handleCreate} marginBottom="20px" marginTop="20px" color="white" height="50px" width="100%" backgroundColor="#11742A" borderRadius="20px">Create my account</Button>
     <Link to="/signin"><Text>Already a customer? Sign in</Text></Link>
     <Text marginTop="30px">By creating an account, you agree to the Harvest Terms of service and Privacy policy.</Text>
    </GridItem>
    </Box>
  )
}

export default SignupSection
