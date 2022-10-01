import React from 'react'

const PasswordRequired = ({passLengthFlag}) => {
  // const navigate = useNavigate()
   console.log(passLengthFlag);
  // if(passLengthFlag){
  //     navigate("signin")
  // }
  return (
    <div>
      <p className={passLengthFlag} >Password length must be min 8</p>
    </div>
  )
}

export default PasswordRequired
