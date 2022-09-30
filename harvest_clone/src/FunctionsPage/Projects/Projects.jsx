import React from "react";
import { Link } from "react-router-dom";
import ProjectCSS from "./Projects.module.css";
// import Search2Icon from "@chakra-ui/icons"
// import NewProjects from "./NewProject/NewProjects";
const Projects = ()=> {
    return(
        <div className={ProjectCSS.main_div}>

            <div className={ProjectCSS.first_div}>
                <div>
                <Link to="/newProjects">
                    <button className={ProjectCSS.btn_one}>New project</button>
                </Link>
                <button className={ProjectCSS.bekar_btn}>Import</button>
                <button className={ProjectCSS.bekar_btn}>Export</button>
            </div>
            <div className={ProjectCSS.searchInput}>
                <input type="text" placeholder="Search by project or client" />
            </div>
            </div>


        </div>
    )
}

export default Projects;