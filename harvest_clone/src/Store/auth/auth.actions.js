import  axios  from "axios";
import { AUTH_SIGNIN_ERROR, AUTH_SIGNIN_LOADING, AUTH_SIGNIN_SUCCESS, AUTH_SIGNOUT, AUTH_SIGNUP_ERROR, AUTH_SIGNUP_LOADING, AUTH_SIGNUP_SUCCESS } from "./auth.types";





export const signinAPI = (userData)=>async(dispatch)=>{
    dispatch({type:AUTH_SIGNIN_LOADING});
    try{
       let response = await axios.post("http://localhost:8000/users/login",userData);
       dispatch({type:AUTH_SIGNIN_SUCCESS,payload:response.data});
       
       console.log(response.data);
       return response.data;
       
    }catch(err){
        dispatch({type:AUTH_SIGNIN_ERROR})
    }
};












export const logoutAPI = ()=>({type:AUTH_SIGNOUT});

export const signupAPI = (userData)=>async(dispatch)=>{
    dispatch({type:AUTH_SIGNUP_LOADING});
    try{
       let response = await axios.post("http://localhost:8000/users/signup",userData);
       dispatch({type:AUTH_SIGNUP_SUCCESS,payload:response.data});
       return response.data;
    }catch(err){
        dispatch({type:AUTH_SIGNUP_ERROR})
    }
};

// export const signupAPI = (body)=>async(dispatch)=>{
//     dispatch({type:AUTH_SIGNUP_LOADING});
//     try{
//         let response = await fetch("http://localhost/8000/users/signup",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json",
//             },
//             body:JSON.stringify(body)
//         })
//         const data = await response.json();
//         if(data.status===422 || !data){
//             alert("Not Valid User");
//             console.log("Not valid user");
//         }else{
//             alert("Account Created Successfully");
//             console.log("Account Created Successfully");
//             // navigate("/signin");
//         }
//     }catch(err){
//         dispatch({type:AUTH_SIGNUP_ERROR})
//     }
// };

