// import { Box, Button, Divider, Grid, GridItem, HStack, Image, Link, Text } from '@chakra-ui/react'
// import React from 'react'
// import styles from "./Feature.module.css";
// import { HashLink } from 'react-router-hash-link';
// import { useNavigate } from 'react-router-dom';

// const TimeTracking = () => {

//   return (
//     <Box  >
//       <Box mb="100px" mt="100px"  >
//       <Grid className={styles.grid2}>
//         <GridItem className={styles.gridItem1}>
//          <Text className={styles.text4}>Time tracking</Text>
//          <Text className={styles.text5}>An intuitive, lightweight time tracking experience that’s easy to adopt and use every day.</Text>
//         <HashLink to="/signin"><Button className={styles.button} >Start your free trial</Button></HashLink> 
//         </GridItem>
//         <GridItem className={styles.gridItem2}>
//             <Image borderTopLeftRadius="10px" borderBottomRightRadius="10px" src='https://www.getharvest.com/hs-fs/hubfs/screenshot-features-timesheets.png?width=787&name=screenshot-features-timesheets.png'/>
//         </GridItem>
//         <GridItem></GridItem>
//         <GridItem>
//             <HStack>
//            <Image width="110px" height="110px" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-stopwatch.svg"/>
//            <Text textAlign="start" fontSize="xl">Track time from browser, desktop, and mobile</Text>
//            </HStack>
//            <Text textAlign="start" fontSize="lg">Make it as easy as possible for your team to capture their time with dedicated apps across devices.</Text>
//         </GridItem>
//         <GridItem>
//             <HStack>
//            <Image width="110px" height="110px" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-integrations.svg"/>
//            <Text textAlign="start" fontSize="xl">Integrated with your workflow</Text>
//            </HStack>
//            <Text textAlign="start" fontSize="lg">Harvest integrates with the tools your team knows and loves — capture time the way your team already works.</Text>
//         </GridItem>
//         <GridItem>
//             <HStack>
//            <Image width="110px" height="110px" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-reminder.svg"/>
//            <Text textAlign="start" fontSize="xl">Custom reminders for consistent time tracking</Text>
//            </HStack>
//            <Text textAlign="start" fontSize="lg">Create automated reminders to help your team track time regularly and accurately.</Text>
//         </GridItem>
//       </Grid>
//     </Box>

//     <Divider mb="70px" borderColor={'#FA5D00'} orientation='horizontal' />
   
//    <Box mb="100px" mt="100px">
//     <Grid className={styles.grid3}>
//      <GridItem>
//       <Image borderTopLeftRadius="20px" borderBottomRightRadius="20px" src="https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-1.jpg?width=375&name=features-quote-1.jpg"/>
//      </GridItem>
//      <GridItem className={styles.gridItem3}>
//         <Text className={styles.text6}>Harvest’s easy, clean time tracking allows us to focus on the tough engineering problems where we bring value to our clients.</Text>
//         <Text className={styles.text7} >Genevieve Laing</Text>
//         <Text  className={styles.text8}>Director of Engineering, Cooper Perkins</Text>
//      </GridItem>
//     </Grid>
//    </Box>
//     </Box>
//   )
// }

// export default TimeTracking

import { Box, Button, Divider, Grid, GridItem, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

import styles from "./Feature.module.css";

const TimeTracking = () => {
  const navigate = useNavigate();
  return (
    <Box name="time_tracking" >
      <Box mb="100px" mt="100px"  >
      <Grid className={styles.grid2}>
        <GridItem className={styles.gridItem1}>
         <Text className={styles.text4}>Time tracking</Text>
         <Text className={styles.text5}>An intuitive, lightweight time tracking experience that’s easy to adopt and use every day.</Text>

        <HashLink to="/signup" > <Button display="block" alignItems = "flex-start" color="white" backgroundColor="#FA5D00" borderRadius="10px" 
                _hover={{ 
                  outline: "#FA5D00",
                  bgColor: "#FA5D00",
                }}
                _focus={{
                  outline: "#FA5D00",
                  bgColor: "#FA5D00",
                }}>Start your free trial</Button></HashLink>

        </GridItem>
        <GridItem className={styles.gridItem2}>
            <Image borderTopLeftRadius="10px" borderBottomRightRadius="10px" src='https://www.getharvest.com/hs-fs/hubfs/screenshot-features-timesheets.png?width=787&name=screenshot-features-timesheets.png'/>
        </GridItem>
        <GridItem></GridItem>
        <GridItem>
            <HStack>
           <Image width="110px" height="110px" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-stopwatch.svg"/>
           <Text textAlign="start" fontSize="xl">Track time from browser, desktop, and mobile</Text>
           </HStack>
           <Text textAlign="start" fontSize="lg">Make it as easy as possible for your team to capture their time with dedicated apps across devices.</Text>
        </GridItem>
        <GridItem>
            <HStack>
           <Image width="110px" height="110px" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-integrations.svg"/>
           <Text textAlign="start" fontSize="xl">Integrated with your workflow</Text>
           </HStack>
           <Text textAlign="start" fontSize="lg">Harvest integrates with the tools your team knows and loves — capture time the way your team already works.</Text>
        </GridItem>
        <GridItem>
            <HStack>
           <Image width="110px" height="110px" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-80-reminder.svg"/>
           <Text textAlign="start" fontSize="xl">Custom reminders for consistent time tracking</Text>
           </HStack>
           <Text textAlign="start" fontSize="lg">Create automated reminders to help your team track time regularly and accurately.</Text>
        </GridItem>
      </Grid>
    </Box>
    <Divider mb="70px" borderColor={'#FA5D00'} orientation='horizontal' />
   
   <Box mb="100px" mt="100px">
    <Grid className={styles.grid3}>
     <GridItem>
      <Image borderTopLeftRadius="20px" borderBottomRightRadius="20px" src="https://www.getharvest.com/hs-fs/hubfs/site-images/features-quote-1.jpg?width=375&name=features-quote-1.jpg"/>
     </GridItem>
     <GridItem className={styles.gridItem3}>
        <Text className={styles.text6}>Harvest’s easy, clean time tracking allows us to focus on the tough engineering problems where we bring value to our clients.</Text>
        <Text className={styles.text7} >Genevieve Laing</Text>
        <Text  className={styles.text8}>Director of Engineering, Cooper Perkins</Text>
     </GridItem>
    </Grid>
   </Box>
    </Box>
  )
}
export default TimeTracking