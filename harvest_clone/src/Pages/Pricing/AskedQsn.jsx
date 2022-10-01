import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
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
    <div className={styles.AskedQsn_seection_box2}>
        <div onClick={()=>{q1 ? setQ1(false) : setQ1(true)}}>
            <h2>How do I sign up for the free plan?
                {(q1)? <span>
                    <ChevronUpIcon color='#FA5D00' w={9} h={9} /></span>:<span>
                    <ChevronDownIcon color='#FA5D00' w={9} h={9} /></span> }

            </h2>
            {q1 ? <span>When your trial account meets the free plan’s requirements, you can sign up for the free version
                during the upgrade process. On the Upgrade Your Harvest Plan page, click the switch to the free version
                link below the plan options.</span> : null}
        </div>
        <div onClick={()=>{q2 ? setQ2(false) : setQ2(true)}}>
            <h2>

                What happens at the end of my trial?
                {(q2)? <span>
                    <ChevronUpIcon color='#FA5D00' w={9} h={9} /></span>:<span>
                    <ChevronDownIcon color='#FA5D00' w={9} h={9} /></span> }</h2>
            {q2 ? <span>You can upgrade to a paid plan any time during your 30-day trial period. If you haven’t upgraded
                at the end of 30 days, your trial account will be automatically deactivated. We don’t collect credit
                card info when you start a trial, so you don’t need to worry about being charged.

                Even though your trial account will be deactivated, we won’t delete your data. If you ever want to try
                Harvest again in the future, your data will be waiting for you.

                If you’re looking to switch to the free plan, you can do that any time during your trial as well. You’ll
                see that option during the upgrade process as long as your account meets the free plan’s
                requirements.</span> : null}
        </div>
        <div onClick={()=>{q3 ? setQ3(false) : setQ3(true)}}>
            <h2>
                Does my team qualify for any discounts?
                {(q3)? <span>
                    <ChevronUpIcon color='#FA5D00' w={9} h={9} /></span>:<span>
                    <ChevronDownIcon color='#FA5D00' w={9} h={9} /></span> }
            </h2>
            {q3 ? <span>Yes! When you pay for the year up front, you get a 10% discount that’s automatically applied to
                your account.

                We also offer discounts upon request to teams of 50+ people, nonprofits, schools and universities,
                educators using Harvest in a classroom setting, and students.</span> : null}
        </div>
        <div onClick={()=>{q4 ? setQ4(false) : setQ4(true)}}>
            <h2>How can I get a quote for my team?
                {(q4)? <span>
                    <ChevronUpIcon color='#FA5D00' w={9} h={9} /></span>:<span>
                    <ChevronDownIcon color='#FA5D00' w={9} h={9} /></span> }
            </h2>
            {q4 ? <span>Use our handy pricing calculator to see how much your team would pay for Harvest and what
                discounts could apply.</span> : null}
        </div>
        <div onClick={()=>{q5 ? setQ5(false) : setQ5(true)}}>
            <h2>
                What are our payment options?
                {(q5)? <span>
                    <ChevronUpIcon color='#FA5D00' w={9} h={9} /></span>:<span>
                    <ChevronDownIcon color='#FA5D00' w={9} h={9} /></span> }</h2>
            {q5 ? <span>You can pay for Harvest via credit card either monthly or yearly. If you pay for the year in
                advance, you’ll get a 10% discount on your bill!

                If you have 10 or more seats and pay for the year in advance, you can also request an invoice when you
                upgrade and pay for your subscription via check or bank transfer.</span> : null}
        </div>
        <div onClick={()=>{q6 ? setQ6(false) : setQ6(true)}}>
            <h2>What happens if my team size changes?
                {(q6)? <span>
                    <ChevronUpIcon color='#FA5D00' w={9} h={9} /></span>:<span>
                    <ChevronDownIcon color='#FA5D00' w={9} h={9} /></span> }
            </h2>
            {q6 ? <span>If you’re paying monthly, you can add or remove seats at any time. Your price will be adjusted
                on your next monthly bill. If you have contractors or interns, or you anticipate the number of seats
                you’ll need may fluctuate from month to month, the monthly option is a better fit for you.

                If you paid for the year in advance, you can add seats at any time and will be charged a prorated amount
                based on the number of days left in your billing cycle. While you can’t remove seats during your current
                billing cycle, you can indicate inside your account if you’d like your yearly plan to renew with fewer
                seats. Keep in mind that yearly accounts receive a 10% discount, so if your seat requirements don’t
                change from month to month, yearly is probably the best option for you.</span> : null}
        </div>
        <div onClick={()=>{q7 ? setQ7(false) : setQ7(true)}}>
            <h2>
                Can we switch our billing frequency? {(q7)? <span>
                    <ChevronUpIcon color='#FA5D00' w={9} h={9} /></span>:<span>
                    <ChevronDownIcon color='#FA5D00' w={9} h={9} /></span> }</h2>
            {q7 ? <span>If you’re paying monthly, you can switch to yearly payment at any time (and you’ll receive a 10%
                discount for doing so!).

                If you paid for the year in advance, you can switch to monthly payment at the end of your current yearly
                billing cycle, but keep in mind that the 10% discount will be removed. To make the change, reach out to
                our support team during the month before your renewal.</span> : null}
        </div>
    </div>
</div>
)
}