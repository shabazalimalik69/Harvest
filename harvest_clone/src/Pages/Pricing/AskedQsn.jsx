import { ChevronDownIcon } from '@chakra-ui/icons';
import React from 'react'
import { useState } from 'react';
import styles from './Pricing.module.css';
export const AskedQsn = () => {
const [q1,setQ1]=useState(false);
const [q2,setQ2]=useState(false);
const [q3,setQ3]=useState(false);
const [q4,setQ4]=useState(false);
const [q5,setQ5]=useState(false);
const [q6,setQ6]=useState(false);
const [q7,setQ7]=useState(false);



return (
<div className={styles.AskedQsn_seection}>
    <div className={styles.AskedQsn_seection_box1}>
        <h1>Frequently asked questions</h1>
    </div>
    <div className={styles.AskedQsn_seection_box2} >
        <div onClick={()=>{q1 ? setQ1(false) : setQ1(true)}}>
            <h2>How do I sign up for the free plan?
                <span>
                    <ChevronDownIcon color='#FA5D00' w={9} h={9} /></span>
            </h2>
            {q1 ? <span>When your trial account meets the free plan’s requirements, you can sign up for the free version
                during the upgrade process. On the Upgrade Your Harvest Plan page, click the switch to the free version
                link below the plan options.</span> : null}
        </div>
        <div onClick={()=>{q2 ? setQ2(false) : setQ2(true)}}>
            <h2>

                What happens at the end of my trial?
                <span>
                    <ChevronDownIcon color='#FA5D00' w={9} h={9} /></span></h2>
            {q2 ? <span>When your trial account meets the free plan’s requirements, you can sign up for the free version
                during the upgrade process. On the Upgrade Your Harvest Plan page, click the switch to the free version
                link below the plan options.</span> : null}
        </div>
        <div onClick={()=>{q3 ? setQ3(false) : setQ3(true)}}>
            <h2>
                Does my team qualify for any discounts?
                <span>
                    <ChevronDownIcon color='#FA5D00' w={9} h={9} /></span>
            </h2>
            {q3 ? <span>When your trial account meets the free plan’s requirements, you can sign up for the free version
                during the upgrade process. On the Upgrade Your Harvest Plan page, click the switch to the free version
                link below the plan options.</span> : null}
        </div>
        <div onClick={()=>{q4 ? setQ4(false) : setQ4(true)}}>
            <h2>How can I get a quote for my team?
                <span>
                    <ChevronDownIcon color='#FA5D00' w={9} h={9} /></span>
            </h2>
            {q4 ? <span>When your trial account meets the free plan’s requirements, you can sign up for the free version
                during the upgrade process. On the Upgrade Your Harvest Plan page, click the switch to the free version
                link below the plan options.</span> : null}
        </div>
        <div onClick={()=>{q5 ? setQ5(false) : setQ5(true)}}>
            <h2>
                What are our payment options?
                <span>
                    <ChevronDownIcon color='#FA5D00' w={9} h={9} /></span></h2>
                    {q5 ? <span>When your trial account meets the free plan’s requirements, you can sign up for the free version during the upgrade process. On the Upgrade Your Harvest Plan page, click the switch to the free version link below the plan options.</span> : null}
        </div>
        <div onClick={()=>{q6 ? setQ6(false) : setQ6(true)}}>
            <h2>What happens if my team size changes?
                <span>
                    <ChevronDownIcon color='#FA5D00' w={9} h={9} /></span>
            </h2>
            {q6 ? <span>When your trial account meets the free plan’s requirements, you can sign up for the free version
                during the upgrade process. On the Upgrade Your Harvest Plan page, click the switch to the free version
                link below the plan options.</span> : null}
        </div>
        <div onClick={()=>{q7 ? setQ7(false) : setQ7(true)}}>
            <h2>
                Can we switch our billing frequency?<span>
                    <ChevronDownIcon color='#FA5D00' w={9} h={9} /></span></h2>
            {q7 ? <span>When your trial account meets the free plan’s requirements, you can sign up for the free version
                during the upgrade process. On the Upgrade Your Harvest Plan page, click the switch to the free version
                link below the plan options.</span> : null}
        </div>
    </div>
</div>
)
}