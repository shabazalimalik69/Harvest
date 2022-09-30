import React from "react";
import NewProjectCSS from "./NewProjects.module.css";
import { Link } from "react-router-dom";






const NewProjects = () => {

   




    
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
        <form action="">
            <div className={NewProjectCSS.client_div}>
                <input  className={NewProjectCSS.search_client} type="text" placeholder="Enter by client's name" />
                <p className={NewProjectCSS.p}>or</p>
                <button className={NewProjectCSS.clent_btn}>Choose a client</button>

            </div>
            <input type="text" className={NewProjectCSS.projectName} />
            <input type="text" className={NewProjectCSS.projectCode} />
            <p className={NewProjectCSS.p1}>Optional. A code can help identify your project. You can use any combination of numbers or letters.</p>
            <div className={NewProjectCSS.date_start_end}>
                <input  className={NewProjectCSS.date} type="text" placeholder="Starts on " />
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
        <div className={NewProjectCSS.last_btn}>
        <button  className={NewProjectCSS.saveProjectbtn}>Save project</button>
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