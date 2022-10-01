import { Link } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import WhyHarvest from './Home.module.css'
const StartTracking = () => {
  const navigate = useNavigate();
  return (
    <>
       <div className={WhyHarvest.main_div2}>
      <div>
      <h1 className={WhyHarvest.h1}>Start tracking time today</h1>
      <h3 className={WhyHarvest.h3}>Join 70,000+ companies spending their time wisely with Harvest.</h3>
      <div className={WhyHarvest.btn_And_p_div}>

      <div className={WhyHarvest.btn_div}>
      <button className={WhyHarvest.btn} onClick={()=>{navigate("/signup")}}>Try Harvest Free</button>
      </div>

      <div className={WhyHarvest.p_div}>
        <p className={WhyHarvest.p}>Free 30-day trial. No credit card required.</p>
        </div>

      </div>
      </div>
    </div>

    </>
  )
}

export default StartTracking
