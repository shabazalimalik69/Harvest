import React from "react";
import style from "./Expanses.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const getProjectData = async () => {
  const response = await axios.get("http://localhost:8000/expenses/expenses");

  return response.data;
};

const Expanses = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [checkbox, setCheckbox] = useState(false);
  const [project, setProject] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const postProjectData = async (project, category, date, amount) => {
    console.log(project, category, date, amount);
    try {
      const response = await axios.post(
        "http://localhost:8000/expenses/expenses",
        {
          id: data.length + 1,
          project_name: project,
          category: category,
          date: date,
          amount: amount,
        }
      );
      console.log(response);
      // if (response) {
      //   getProjectData();
      // }
    } catch (e) {
      console.log(e.message);
    }
  };

  console.log(show);
  const handleDate = (e) => {
    console.log(e);
    setDate(e);
  };
  const handleProject = (e) => {
    console.log(e);
    setProject(e);
  };
  const handleNotes = (e) => {
    console.log(e);
    // setNotes(e)
  };
  const handleCheckbox = () => {
    setCheckbox(!checkbox);
  };
  const handleAmount = (e) => {
    console.log(e);
    setAmount(e);
  };
  const handleCategory = (e) => {
    console.log(e);
    setCategory(e);
  };
  const addExpanses = () => {
    setShow1(false);
    postProjectData(project, category, date, amount).then((d) => {
      setData([...data], d);
    });
    console.log("data saved");
  };

  const handleData = async () => {
    try {
      const pData = await getProjectData();
      console.log(pData);
      setData(pData);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    handleData();
  }, []);
  console.log(data);
  return (
    <div className={style.expanses}>
      <div className={style.sub_expanses}>
        <h2 className={style.expanses_head}>Expanses</h2>
        <button
          type="button"
          onClick={() => setShow(false)}
          className={style.expanses_create_button}
        >
          + Track expanses
        </button>
        <form className={show ? style.hide_expanse : style.show_expanse}>
          <div className={style.expanse_form}>
            <div className={style.column1}>
              <h2 className={style.h2}>Date</h2>
              <input
                onChange={(e) => handleDate(e.target.value)}
                type="date"
                placeholder="Date"
              />
            </div>
            <div className={style.column2}>
              <h2 className={style.h2}>Project/Category</h2>
              <input
                onChange={(e) => handleProject(e.target.value)}
                className={style.input_data}
                type="text"
                placeholder="project name"
              />
              <select
                onChange={(e) => handleCategory(e.target.value)}
                name="category"
                className={style.input_data}
              >
                <option value="">Choose category</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Lodging">Lodging</option>
                <option value="Meal">Meals</option>
                <option value="Milage">Milage</option>
                <option value="Transportation">Transportation</option>
              </select>
              <input
                onChange={(e) => handleNotes(e.target.value)}
                className={style.input_data}
                type="text"
                placeholder="Notes"
              />
              <input className={style.input_data} type="file" />
              <div className={style.column}>
                <input onChange={() => handleCheckbox()} type="checkbox" />
                <p>This expense is billable</p>
              </div>
              <div className={style.Expanse_detail_submit}>
                <button
                  onClick={() => addExpanses()}
                  className={style.expanses_save_button}
                  type="button"
                >
                  Save Expanses
                </button>
                <button type="button" onClick={() => setShow(true)}>
                  Cancel
                </button>
              </div>
            </div>
            <div className={style.column3}>
              <h2 className={style.h2}>Amount</h2>
              <input
                onChange={(e) => handleAmount(e.target.value)}
                className={style.amount_input}
                type="number"
                placeholder="Amount"
              />
            </div>
          </div>
        </form>

        <div className="show_added_data">
          {data.map((elem) => (
            <div key={elem._id}> {elem.project_name}</div>
          ))}
        </div>

        <div className={show1 ? style.static_body : style.static_body_hide}>
          <p>Track your first expanse now</p>
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
