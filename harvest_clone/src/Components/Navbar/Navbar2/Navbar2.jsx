import {
  Box,
  Button,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar2.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logoutAPI } from "../../../Store/auth/auth.actions";

const Navbar2 = () => {
  const [show, hide] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((store)=>store.auth.token);

  const handleNav2 = () => {
    hide(!show);
  };

  const handleClose = (value) => {
    setText(value);
    console.log(value);
    setTimeout(() => {
      hide(false);
    }, 500);
  };

  const handleSignout = () => {
    dispatch(logoutAPI())
  };

  return (
    <Box>
      <Box className={style.box_main}>
        <ul className={style.ul1}>
          <li className={style.li1}>
            <Box className={style.icon1} onClick={handleNav2}>
              {" "}
              <AiOutlineMenu style={{ height: "100%", marginTop: "3px" }} />
            </Box>
          </li>
          <li className={style.li1}>
            <Box className={style.icon1}>{text}</Box>
          </li>

          <li className={style.li1}>
            <Link to="/time" className={style.link1}>
              Time
            </Link>
          </li>
          <li className={style.li1}>
            <Link to="/expanses" className={style.link1}>
              Expenses
            </Link>
          </li>
          <li className={style.li1}>

            

            <Link to="/projects" className={style.link1}>

              Projects
            </Link>
          </li>
          <li className={style.li1}>
            <Link to="/team" className={style.link1}>
              Team
            </Link>
          </li>
          <li className={style.li1}>
            <Link to="/reports" className={style.link1}>
              Reports
            </Link>
          </li>
          <li className={style.li1}>
            <Link to="/invoices" className={style.link1}>
              Invoices
            </Link>
          </li>
          <li className={style.li1}>
            <Link to="/manage" className={style.link1}>
              Manage
            </Link>
          </li>
          <li className={style.li1} style={{ float: "right" }}>
            <Link to="" className={style.link1}>
              Akash Keshari
            </Link>
            <Box className={style.dropbox} >
              <Box
                w="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                  gap="10px"
                  paddingLeft={5}
                >
                  <Image
                    src="favicon.ico"
                    alt="user pic"
                    borderRadius="50%"
                    w="20%"
                  />
                  <Box w="80%" fontSize={22} textAlign="justify" >
                    <Text>Akash Keshari</Text>
                    <Text mt={-2}>masai</Text>
                  </Box>{" "}
                </Text>
              </Box>
              <Text className={style.text11}>
                {" "}
                <Link to="">My Profile</Link>
              </Text>
              <Text className={style.text11}>
                {" "}
                <Link to="">My time reports</Link>
              </Text>
              <Text className={style.text11}>
                {" "}
                <Link to="">Notifications</Link>
              </Text>
              <Text className={style.text11}>
                {" "}
                <Link to="">refer a friend</Link>
              </Text>
              <hr />
              <Text className={style.text11}>
                {" "}
                <Link to="">Switch accounts</Link>
              </Text>
              <Text className={style.text11}>
                {" "}
                <Text onClick={handleSignout}>Sign out</Text>
              </Text>
            </Box>
          </li>

          <li className={style.li1} style={{ float: "right" }}>
            <Link to="/company_account" className={style.link1}>
              Setting
            </Link>
          </li>
        </ul>
      </Box>

      <Box className={show ? style.box1 : style.box2}>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" >
        <Box h="-moz-max-content" w="90%">
          <Box className={style.box3}>
            <Box className={style.box31}>
              {" "}
              <Link to="">
                <Box onClick={()=>handleClose("Time")} >Time</Box>
              </Link>
            </Box>
            <Box className={style.box31}>
              {" "}
              <Link to="">
                <Box onClick={()=>handleClose("Expenses")}>Expenses</Box>
              </Link>
            </Box>
            <Box className={style.box31}>
              {" "}
              <Link to="">
                <Box onClick={()=>handleClose("Projects")}>Projects</Box>
              </Link>
            </Box>
            <Box className={style.box31}>
              {" "}
              <Link to="">
                <Box onClick={()=>handleClose("Team")}>Team</Box>
              </Link>
            </Box>
            <Box className={style.box31}>
              {" "}
              <Link to="">
                <Box onClick={()=>handleClose("Reports")}>Reports</Box>
              </Link>
            </Box>
            <Box className={style.box31}>
              {" "}
              <Link to="">
                <Box onClick={()=>handleClose("Invoices")}>Invoices</Box>
              </Link>
            </Box>
            <Box className={style.box31}>
              {" "}
              <Link to="">
                <Box onClick={()=>handleClose("Manage")}>Manage</Box>
              </Link>
            </Box>
            <Box className={style.box31}>
              {" "}
              <Link to="">
                <Box onClick={()=>handleClose("Setting")}>Setting</Box>
              </Link>
            </Box>
          </Box>
        </Box>


        <Box w="90%"  >
          <Box className={style.box41}>
        <Box className={style.box411}>
              {" "}
              <Link to="">
                <Box onClick={()=>handleClose("My Profile")}>My Profile</Box>
              </Link>
            </Box>

            <Box className={style.box411}>
              {" "}
              <Link to="">
                <Box onClick={()=>handleClose("My Time Report")}>My Time Report</Box>
              </Link>
            </Box>

            <Box className={style.box411}>
              {" "}
              <Link to="">
                <Box onClick={()=>handleClose("Notifications")}>Notifications</Box>
              </Link>
            </Box>

            <Box className={style.box411}>
              {" "}
              <Link to="">
                <Box onClick={()=>handleClose("Refer a friend")}>Refer a friend</Box>
              </Link>
            </Box>

            <Box className={style.box411}>
              {" "}
              <Link to="">
                <Box onClick={()=>handleClose("Switch Account")}>Switch Account</Box>
              </Link>
            </Box>

            <Box className={style.box411}>
              {" "}
              <Link to="">
                <Box onClick={()=>handleClose("Signout")}>Signout</Box>
              </Link>
            </Box>


            </Box>
        </Box>

        </Box>

      </Box>


        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box h="-moz-max-content" w="90%">
            <Box className={style.box3}>
              <Box className={style.box31}>
                {" "}
                <Link to="">
                  <Box onClick={() => handleClose("Time")}>Time</Box>
                </Link>
              </Box>
              <Box className={style.box31}>
                {" "}
                <Link to="">
                  <Box onClick={() => handleClose("Expenses")}>Expenses</Box>
                </Link>
              </Box>
              <Box className={style.box31}>
                {" "}
                <Link to="">
                  <Box onClick={() => handleClose("Projects")}>Projects</Box>
                </Link>
              </Box>
              <Box className={style.box31}>
                {" "}
                <Link to="">
                  <Box onClick={() => handleClose("Team")}>Team</Box>
                </Link>
              </Box>
              <Box className={style.box31}>
                {" "}
                <Link to="">
                  <Box onClick={() => handleClose("Reports")}>Reports</Box>
                </Link>
              </Box>
              <Box className={style.box31}>
                {" "}
                <Link to="">
                  <Box onClick={() => handleClose("Invoices")}>Invoices</Box>
                </Link>
              </Box>
              <Box className={style.box31}>
                {" "}
                <Link to="">
                  <Box onClick={() => handleClose("Manage")}>Manage</Box>
                </Link>
              </Box>
              <Box className={style.box31}>
                {" "}
                <Link to="">
                  <Box onClick={() => handleClose("Setting")}>Setting</Box>
                </Link>
              </Box>
            </Box>
          </Box>

          <Box w="90%">
            <Box className={style.box41}>
              <Box className={style.box411}>
                {" "}
                <Link to="">
                  <Box onClick={() => handleClose("My Profile")}>
                    My Profile
                  </Box>
                </Link>
              </Box>

              <Box className={style.box411}>
                {" "}
                <Link to="">
                  <Box onClick={() => handleClose("My Time Report")}>
                    My Time Report
                  </Box>
                </Link>
              </Box>

              <Box className={style.box411}>
                {" "}
                <Link to="">
                  <Box onClick={() => handleClose("Notifications")}>
                    Notifications
                  </Box>
                </Link>
              </Box>

              <Box className={style.box411}>
                {" "}
                <Link to="">
                  <Box onClick={() => handleClose("Refer a friend")}>
                    Refer a friend
                  </Box>
                </Link>
              </Box>

              <Box className={style.box411}>
                {" "}
                <Link to="">
                  <Box onClick={() => handleClose("Switch Account")}>
                    Switch Account
                  </Box>
                </Link>
              </Box>

              <Box className={style.box411}>
                {" "}
                <Link to="">

                  <Box onClick={handleSignout}>Sign Out</Box>

                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
  );
};

export default Navbar2;
