import { Box, Button, FormControl, Grid, GridItem, Image, Input, Link, Text } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Signup.module.css";

const initData={
    first_name:"",
    last_name:"",
    company_name:"",
    email:"",
    password:"",
}

const SignupSection = () => {
    const [userData,setUserData] = useState(initData);
    const navigate = useNavigate()
    const {first_name,last_name,company_name,email,password} = userData;
    
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setUserData({...userData,[name]:value})
    };

    const handleCreate = async(e)=>{
        e.preventDefault();

        let response = await fetch("http://localhost:8000/users/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({first_name,last_name,company_name,email,password})
        })
        const data = await response.json();
        if(data.status===422 || !data){
            alert("Not Valid User");
            console.log("Not valid user");
        }else{
            alert("Account Created Successfully");
            console.log("Account Created Successfully");
            navigate("/signin");
        }
    }


     // const handleSubmit = (e)=>{
    //   e.preventDefault();
    //   console.log("clicked")
    //   dispatch(signupAPI(userData))

    // }

    // useEffect(()=>{
    //   if(token){
    //     navigate("/signin")
    //   }
    // },[token,navigate])

  return (
    <Box className={styles.signupSection}>
    <GridItem className={styles.gridItem2}>
     <Text className={styles.text4} >Get a FREE Trial</Text>
     <Text marginTop="10px">No credit card required</Text>
     <Button marginTop="20px" width="100%" backgroundColor="#FFFFFF" border="1px solid #beb6b6">
       {/* <Text className={styles.text3} >Sign up with Google</Text> */}
       Sign up with Google
     </Button>
     <Text marginTop="20px">or with your email below</Text>
     <FormControl method="POST">
       <Grid className={styles.grid2}>
       <Input value={first_name} onChange={handleChange} type='text' name='first_name' placeholder='First name' />
       <Input value={last_name} onChange={handleChange} type='text' name='last_name' placeholder='First name' />
       <Input value={company_name} onChange={handleChange} type='text' name='company_name' placeholder='Company name' />
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
