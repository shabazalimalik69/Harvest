import React from 'react'
import { Box,Text,Grid, Image, Link, Divider} from "@chakra-ui/react";
import { ArrowDownIcon } from '@chakra-ui/icons'

import styles from "./Feature.module.css"
import TimeTracking from './Time_Tracking';
import ReportAnalysis from './Report_Analysis';
import Invoice from './Invoice';
import BottomSection from './BottomSection';

const Feature = () => {
  
  return (
    <Box className={styles.Feature_Section}>
      {/* Top Section */}
    <Box className={styles.top_section} >
    <Text className={styles.text1}>Everything your team needs to keep ticking</Text>
    <Text className={styles.text2}>Intuitive time tracking and powerful insights that help your team thrive.</Text>
    <Grid className={styles.grid1}>
    
    <Link to="time_tracking" className={styles.box1}>
     <Image className={styles.image} src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-time.svg" alt="" />
     <Text className={styles.text3}>Time tracking</Text>
     <ArrowDownIcon color="#FA5D00" w={6} h={6} />
     </Link>
     <Link to="report_analysis" className={styles.box1}>
     <Image className={styles.image} src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-report.svg" alt="" />
     <Text  className={styles.text3}>Reports & analysis</Text>
     <ArrowDownIcon color="#FA5D00" w={6} h={6} />
     </Link>
     <Link to="invoice" className={styles.box1}>
     <Image className={styles.image} src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/features/illo-nav-invoice.svg" alt="" />
     <Text className={styles.text3}>Invoice & payments</Text>
     <ArrowDownIcon color="#FA5D00" w={6} h={6} />
     </Link>
    </Grid>
    </Box>

    <Divider borderColor={'#FA5D00'} orientation='horizontal' />

    {/* Time Tracking Section */}

    <TimeTracking/>

    <Divider borderColor={'#FA5D00'} orientation='horizontal' />

   {/* Report & Analysis Section */}

  <ReportAnalysis/>

 <Divider borderColor={'#FA5D00'} orientation='horizontal' />

{/* Invoicing & payments Section */}

    <Invoice/>

  <Divider  borderColor={'#FA5D00'} orientation='horizontal' />

    {/* Bottom Section */}
    <BottomSection/>

    {/* Footer */}

    </Box>
  )
}

export default Feature;
