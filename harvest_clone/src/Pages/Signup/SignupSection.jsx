import { Box, Button, FormControl, Grid, GridItem, Image, Input, Link, Text } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Signup.module.css";

const initData={
    first_name:"",
    last_name:"",
    company:"",
    email:"",
    password:"",
}

const SignupSection = () => {
    const [userData,setUserData] = useState(initData);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [value,setValue] = useState(false);
    const [check,setCheck] = useState("")

    const token = useSelector((store)=>store.auth.token)
    const {first_name,last_name,company,email,password} = userData;

    const inputValue1 = useRef(null);
    const inputValue2 = useRef(null);
    const inputValue3 = useRef(null);
    const inputValue4 = useRef(null);
    const inputValue = useRef(null);


    const handleChange=(e)=>{
        const {name,value} = e.target;
        setUserData({...userData,[name]:value})
    };




    const checkPassword = (e)=>{
      console.log(e.target.value)
      setCheck(e.target.value)
    }
 console.log(check)

     const handleCreate = (e)=>{
      if(check.length>7){
        e.preventDefault();
        console.log("clicked")
        const inputValue5 = inputValue1.current.value;
        const inputValue6 = inputValue2.current.value;
        const inputValue7 = inputValue3.current.value;
        const inputValue8 = inputValue4.current.value;
        const inputValue9 = inputValue.current.value;
        (inputValue5===""?alert("Please Enter First Name"):setValue(true));
        (inputValue6===""?alert("Please Enter Last Name"):setValue(true));
        (inputValue7===""?alert("Please Enter Company Name"):setValue(true));
        (inputValue8===""?alert("Please Enter Email"):setValue(true));
        (inputValue9===""?alert("Please Enter Email"):setValue(true));
  
        
  
        dispatch(signupAPI(userData))
        navigate("/signin")
      }else{
        alert("Password length must be min 8")
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

       <Input ref={inputValue1} value={first_name} onChange={handleChange} type='text' name='first_name' placeholder='First name' />
       <Input ref={inputValue2} value={last_name} onChange={handleChange} type='text' name='last_name' placeholder='First name' />
       <Input ref={inputValue3} value={company} onChange={handleChange} type='text' name='company' placeholder='Company name' />
       <Input ref={inputValue4} value={email} onChange={handleChange} type='email' name='email' placeholder='Work email' />
       <Input  ref={inputValue} value={password}  onChange={(e)=>{checkPassword(e); handleChange(e)}} className={styles.input} type='password' name='password' placeholder='Password' />

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
