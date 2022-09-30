import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Expanses.module.css";

const Expanses = () => {
  return (
    <div className={style.expanses}>
      <div className={style.sub_expanses}>
        <h2 className={style.expanses_head}>Expanses</h2>
        <button type="button" className={style.expanses_create_button}>
          + Track expanses
        </button>
        <div className={style.expanse_form}>
          <table>
            <thead>
              <tr>Date</tr>
              <tr>Project/Category</tr>
              <tr>Amount</tr>
            </thead>
          </table>
        </div>
        <div className={style.static_body}>
          <p>Track your first expense now</p>
          <div className={style.expanse_image}>
            <img
              src="https://cache.harvestapp.com/static/illustrations/expense_onboard-AAC9C67E.png"
              alt="img"
            />
            <p>
              Record those airline tickets, meals, miles, and other expenses in
              Harvest <br /> so you can more accurately budget projects and
              invoice clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expanses;
