import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProject } from "../../Store/project2/project.action";
import ProjectCSS from "./Projects.module.css";
// import Search2Icon from "@chakra-ui/icons"
// import NewProjects from "./NewProject/NewProjects";

const Projects = () => {
  const [page, setPage] = useState(1);
  const { loading, data } = useSelector((store) => store.projects);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProject(page));
  }, [page]);

  return (
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

      <div className={ProjectCSS.h1}>Projects</div>

      <div className={ProjectCSS.third_div}>
        <div className={ProjectCSS.third_div_first_div}>
          <select className={ProjectCSS.select}>
            <option value="">Active projects(2)</option>
            <option value="">Budgeted projects(2)</option>
            <option value="">Archived projects(0)</option>
          </select>
        </div>
        <div className={ProjectCSS.third_div_second_div}>
          <div>
            <select className={ProjectCSS.select1}>
              <option value="">Filter by client</option>
              <option value="">All Client</option>
              <option value="">Active Client</option>
              <option value="">Akash</option>
              <option value="">Sumit</option>
            </select>
            <select className={ProjectCSS.select1}>
              <option value="">Filter by managers </option>
              <option value="">Active managers of projects</option>
              <option value="">Akash</option>
              <option value="">Sumit</option>
              <option value="">Sahbas</option>
              <option value="">Ankur</option>
              <option value="">Sombir</option>
            </select>
          </div>
        </div>
      </div>
      <div className={ProjectCSS.fourth_div}>
        <div>
          <input type="checkbox" />
          <p className={ProjectCSS.p45}>Client</p>
        </div>
        <p className={ProjectCSS.p45}>Budget</p>
        <p className={ProjectCSS.p13}>Project name</p>
        <p className={ProjectCSS.p13}>Project code</p>
        <p className={ProjectCSS.p13}>Date</p>
      </div>
      {data.map((e) => (
        <div className={ProjectCSS.projects} key={e.id}>
          <p>{e.client_name}</p>
          <p>{e.budgetperhour}</p>
          <p>{e.project_name}</p>
          <p>{e.project_code}</p>
          <p>{e.date}</p>
        </div>
      ))}
      {/* <button type="button" onClick={allDeleteExpanses}>
        DELETE ALL
      </button> */}
      <div className={ProjectCSS.page}>
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Prev
        </button>
        <button>{page}</button>
        <button
          type="button"
          disabled={page >= 10}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </button>
      </div>

      <div className={ProjectCSS.footer}>
        <div className={ProjectCSS.footer_btn}>
          <p className={ProjectCSS.p1}>
            You have 30 days left in your free trial
          </p>
          <button>Upgarde</button>
        </div>

        <div className={ProjectCSS.footer_end}>
          <img src="http://localhost:3000/harvest_Logo.png" alt="logo" />
          <p className={ProjectCSS.p3}>Terms</p>
          <p className={ProjectCSS.p3}>Privacy</p>
          <p className={ProjectCSS.p3}>Status</p>
          <p className={ProjectCSS.p3}>Blog</p>
          <p className={ProjectCSS.p3}>Help</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
