import React from "react";
import NewProjectCSS from "./NewProjects.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useDispatch} from "react_redux";






const NewProjects = (props) => {
    const [clienName, setClientName] = useState('');
    const [project_name, setProject_name] = useState('');
    const [project_code, setProject_code] = useState('');
    const [date, setDate] = useState('');
    const [rates, setRates] = useState('');
    const [budgetperHour, setBudgetperHour] = useState('');

    const dispatch =useDispatch();

    function onCreatePost(e){
        e.preventDefault();


    }


 


   




    
    return(
        <div className={NewProjectCSS.main_div}>
            <div className={NewProjectCSS.first_div}> 
        <p className={NewProjectCSS.h1}>New Project</p>
        </div>
        <div className={NewProjectCSS.second_div}>
        <div className={NewProjectCSS.second_left_div}>

            <p className={NewProjectCSS.clientcss}>Client</p>
            <p className={NewProjectCSS.projectNamecss}>Project name</p>
            <p className={NewProjectCSS.projectCodecss}>Project code</p>
            <p className={NewProjectCSS.h2}>Dates</p>
            <p className={NewProjectCSS.notescss}>Notes</p>
            <p className={NewProjectCSS.Permissionscss}>Permissions</p>
            
        </div>
        
        <div className={NewProjectCSS.second_right_div}>


            {/* form */}

        <form onSubmit={onCreatePost}>
            <div className={NewProjectCSS.client_div}>


                {/* clientName */}

                <input  className={NewProjectCSS.search_client} type="text" placeholder="Enter by client's name"  value={clienName} onChange={(e)=> setClientName(e.target.value)}/>
                <p className={NewProjectCSS.p}>or</p>
                <button className={NewProjectCSS.clent_btn}>Choose a client</button>

            </div>

            {/* projectname, projectCode */}

            <input type="text" className={NewProjectCSS.projectName} value={project_name} onChange={(e)=> setProject_name(e.target.value)}/>
            <input type="text" className={NewProjectCSS.projectCode} value={project_code} onChange={(e)=> setProject_code(e.target.value)}/>
            <p className={NewProjectCSS.p1}>Optional. A code can help identify your project. You can use any combination of numbers or letters.</p>
            <div className={NewProjectCSS.date_start_end}>

                {/* date */}

                <input  className={NewProjectCSS.date} type="text" placeholder="Starts on " value={date} onChange={(e)=> setDate(e.target.value)}/>
                <p className={NewProjectCSS.p2}>to</p>
                <input className={NewProjectCSS.date}  type="text" placeholder="Ends on" />

            </div>
            <p className={NewProjectCSS.p1}>Optional. Youʼll still be able to track time outside of this date range.</p>
            <input className={NewProjectCSS.Notes} type="text" />
            <p className={NewProjectCSS.p1}>Optional. Notes are great for anything you need to reference later, like invoice schedules, which you can see when creating an invoice for Fixed Fee projects. Notes can only be seen by Administrators. Administrators can control access to notes in Settings.</p>
            
            <div className={NewProjectCSS.radiobtn}>
            <div><input type="radio"/>
            <p>Show project report to Administrators and people who manage this project</p>
            <Link to="#" className={NewProjectCSS.link}>What will people see?</Link>
            </div>
            <div><input type="radio"  />
            <p>Show project report to everyone on this project</p>
            <Link to="#" className={NewProjectCSS.link}>What will people see?</Link>
            </div>
            </div>
            
            
            </form>
        </div>

        
        
        
        </div>

        <div className={NewProjectCSS.budget}>
            <div className={NewProjectCSS.left_budget}>
                <p className={NewProjectCSS.clientcss}>Project type</p>

            </div>

            <div className={NewProjectCSS.right_budget}>

                <div className={NewProjectCSS.top_budget}>
                    <div className={NewProjectCSS.top_budget_box1}>
                        <p className={NewProjectCSS.p5}>Time & Materials</p>
                        <p className={NewProjectCSS.p4}>Bill by the hour, with billable rates</p>


                    </div>
                    <div className={NewProjectCSS.top_budget_box}>
                    <p className={NewProjectCSS.p5}>Fixed Fee</p>
                        <p className={NewProjectCSS.p4}>Bill a set price, regardless of time tracked</p>


                    </div>
                    <div className={NewProjectCSS.top_budget_box}>
                    <p className={NewProjectCSS.p5}>Non-Billable</p>
                        <p className={NewProjectCSS.p4}>Not billed to a client</p>


                    </div>
                    

                </div>
                {/* budget main inputbox */}

                <div className={NewProjectCSS.bottom_box}>
                    <div>
                    <p className={NewProjectCSS.p10}>Billable rates</p>
                    <p className={NewProjectCSS.p11}>We need billable rates to track your projectʼs billable amount.</p>
                    
                    <div className={NewProjectCSS.budget_first_box}>

                        {/* rates */}

                        <input type="text" placeholder="Project billable rate" value={rates} onChange={(e)=> setRates(e.target.value)}/>
                        <p className={NewProjectCSS.p2}>$</p>
                        <input type="text" />
                        <p className={NewProjectCSS.p2}>per hour</p>



                    </div>
                    <div>
                    <p className={NewProjectCSS.p10}>Budget</p>
                    <p className={NewProjectCSS.p11}>Set a budget to track project progress.</p>
                    
                    <div className={NewProjectCSS.budget_first_box}>

                        {/* budgetHour */}

                        <input type="text" placeholder="Total project hour" value={budgetperHour} onChange={(e)=> setBudgetperHour(e.target.value)}/>
                        
                        <input type="text" />
                        <p className={NewProjectCSS.p2}>hour</p>



                    </div>

                    <div className={NewProjectCSS.checkbox}>
                   <div> <input type="checkbox"  />
                   <p className={NewProjectCSS.p13}>Budget resets every month</p>
                   </div>
                    <div><input type="checkbox"  />
                    <p className={NewProjectCSS.p13}>Send email alerts if project exceeds </p>
                    <input className={NewProjectCSS.onebox} type="text" placeholder="80.00" />
                    <p className={NewProjectCSS.p13}> % of budget</p>
                    </div>
                    </div>

                    </div>

                    </div>

                    
                        
                    </div>


                    

            </div>

            

        </div>

        <div className={NewProjectCSS.last_btn}>
        <button type="submit" className={NewProjectCSS.saveProjectbtn}>Save project</button>
            <button className={NewProjectCSS.cancelcss}>Cancel</button>
            
        </div>

        <div className={NewProjectCSS.footer}>

            <div className={NewProjectCSS.footer_btn}>
                <p className={NewProjectCSS.p1}>You have 30 days left in your free trial</p>
                <button>Upgarde</button>
            </div>

            <div className={NewProjectCSS.footer_end}>
                <img src="http://localhost:3000/harvest_Logo.png" alt="logo" />
                <p className={NewProjectCSS.p3}>Terms</p>
                <p className={NewProjectCSS.p3}>Privacy</p>
                <p className={NewProjectCSS.p3}>Status</p>
                <p className={NewProjectCSS.p3}>Blog</p>
                <p className={NewProjectCSS.p3}>Help</p>


            </div>


        </div>
        
        
        </div>
    )
}

export default NewProjects;