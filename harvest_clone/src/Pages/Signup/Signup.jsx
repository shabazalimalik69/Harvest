import { Box, Divider, Grid} from '@chakra-ui/react'
import React from 'react'
import LeftSection from './LeftSection'
import styles from "./Signup.module.css"
import SignupSection from './SignupSection'

const Signup = () => {
  return (
    <Box className={styles.signup}>
     <Grid className={styles.grid1} >

      {/* Left Section */}
      
       <LeftSection/>

       {/* SignUp Page */}

       <SignupSection/>
      
     </Grid>
     <Divider borderColor={'#FA5D00'} orientation='horizontal' />

    </Box>
  )
}

export default Signup
