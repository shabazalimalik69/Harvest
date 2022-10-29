import style from "./Expanses.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProject } from "../../Store/project2/project.action";
import {
  allDeleteData,
  deleteData,
  getData,
  patchData,
  postData,
} from "../../Store/expanse/expanse.action";
import { getProject } from "../../Store/project2/project.action";

const Expanses = () => {
<<<<<<< HEAD
  const { data1 } = useSelector((store) => store.expanse);
  const { data } = useSelector((store) => store.projects);
=======
  const { expanseData } = useSelector((store) => store.expanse);
  const { totalPages } = useSelector((store) => store.expanse);
>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
  const token = useSelector((store) => store.auth.token);
  const { data } = useSelector((store) => store.projects);
  const [show, setShow] = useState(true);
  const [page, setPage] = useState(1);
  const [show1, setShow1] = useState(true);
  const [creds, setCreds] = useState({});
  const [editId, setEditId] = useState(-1);
  const [editHide, setEditHide] = useState(true);
  const dispatch = useDispatch();
<<<<<<< HEAD
  console.log(data);
=======
  // console.log(data);

>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
  const onChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };
  const onEdit = (id) => {
    setEditId(id);
  };
  const deleteExpanses = (id) => {
    dispatch(deleteData(id, page));
  };
  const patchExpanses = (id) => {
    setEditHide(false);

    dispatch(patchData(id, page, creds));
  };

  // console.log(creds, creds2);

  const allDeleteExpanses = () => {
    dispatch(allDeleteData());
  };
  const addExpanses = () => {
    dispatch(postData(creds));
  };

  useEffect(() => {
    if (expanseData.length > 0) {
      setShow1(false);
    } else {
      setShow1(true);
    }
    dispatch(getData(token, page));
    dispatch(getProject(page));
<<<<<<< HEAD
  }, [page]);
=======
  }, [page, expanseData.length, dispatch]);
>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
  // console.log(data);
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
                onChange={onChange}
                type="date"
                name="date"
                placeholder="Date"
              />
            </div>
            <div className={style.column2}>
              <h2 className={style.h2}>Project/Category</h2>
<<<<<<< HEAD
              {/* <input
=======
              <select
>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
                onChange={onChange}
                name="project_name"
                className={style.input_data}
                type="text"
                placeholder="project name"
<<<<<<< HEAD
              /> */}
              <select
                onChange={onChange}
                name="project_name"
                className={style.input_data}
              >
                {data.map((elem) => (
                  <option value={elem.project_name}>{elem.project_name}</option>
                ))}
                <option value="">Choose category</option>
=======
              >
                {data.map((elem) => (
                  <option key={elem.id} value={elem.project_name}>
                    {elem.project_name}
                  </option>
                ))}
>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
              </select>
              <select
                onChange={onChange}
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
                onChange={onChange}
                name="notes"
                className={style.input_data}
                type="text"
                placeholder="Notes"
              />
              <input className={style.input_data} type="file" />
              <div className={style.column}>
                <input
                  onChange={onChange}
                  type="checkbox"
                  name="billable"
                  value="Billable"
                />
                <p>This expense is billable</p>
              </div>
              <div className={style.Expanse_detail_submit}>
                <button
                  onClick={() => {
                    addExpanses();
                    setShow(true);
                  }}
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
                onChange={onChange}
                name="amount"
                className={style.amount_input}
                type="number"
                placeholder="Amount"
              />
            </div>
          </div>
        </form>
        {/* ----------------------------------------------------------------------------------------- */}
        <div className="show_added_data">
<<<<<<< HEAD
          {data1?.map((elem) =>
=======
          {expanseData?.map((elem) =>
>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
            elem.id === editId ? (
              <form
                key={elem.id}
                className={editHide ? style.hide_expanse : style.show_expanse}
              >
                <div key={elem.id} className={style.expanse_form}>
                  <div className={style.column1}>
                    <h2 className={style.h2}>Date</h2>
                    <input
                      onChange={onChange}
                      type="date"
                      name="date"
                      placeholder="Date"
<<<<<<< HEAD
                      value={elem.date}
=======
                      // value={elem.date}
>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
                    />
                  </div>
                  <div className={style.column2}>
                    <h2 className={style.h2}>Project/Category</h2>
                    <input
                      onChange={onChange}
                      name="project_name"
                      className={style.input_data}
                      type="text"
                      placeholder="project name"
<<<<<<< HEAD
                      value={elem.project_name}
=======
                      // value={elem.project_name}
>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
                    />
                    <select
                      onChange={onChange}
                      name="category"
                      className={style.input_data}
<<<<<<< HEAD
                      value={elem.category}
=======
                      // value={elem.category}
>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
                    >
                      <option value="">Choose category</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Lodging">Lodging</option>
                      <option value="Meal">Meals</option>
                      <option value="Milage">Milage</option>
                      <option value="Transportation">Transportation</option>
                    </select>
                    <input
                      onChange={onChange}
                      name="notes"
                      className={style.input_data}
                      type="text"
                      placeholder="Notes"
<<<<<<< HEAD
                      value={elem.notes}
=======
                      // value={elem.notes}
>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
                    />
                    <input className={style.input_data} type="file" />
                    <div className={style.column}>
                      <input
                        onChange={onChange}
                        type="checkbox"
                        name="billable"
                        // value={elem.billable}
                      />
                      <p>This expense is billable</p>
                    </div>
                    <div className={style.Expanse_detail_submit}>
                      <button
                        onClick={() => {
                          patchExpanses(elem.id);
                          setEditHide(true);
                        }}
                        className={style.expanses_save_button}
                        type="button"
                      >
                        Update Expanses
                      </button>
                      <button type="button" onClick={() => setEditHide(true)}>
                        Cancel
                      </button>
                      <button
                        className={style.elem_button}
                        onClick={() => {
                          deleteExpanses(elem.id);
                        }}
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className={style.column3}>
                    <h2 className={style.h2}>Amount</h2>
                    <input
                      onChange={onChange}
                      name="amount"
                      className={style.amount_input}
                      type="number"
                      placeholder="Amount"
<<<<<<< HEAD
                      value={elem.amount}
=======
                      // value={elem.amount}
>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
                    />
                  </div>
                </div>
              </form>
            ) : (
              <div key={elem.id} className={style.show_elem}>
                <div className={style.elem_date}>
                  <p>{elem.date}</p>
                </div>
                <div className={style.elem_project_name}>
                  <h3>{elem.project_name}</h3>
                  <p>{elem.category}</p>
                </div>
                <div className={style.elem_amount}>
                  <p>$&nbsp;{elem.amount}</p>
                </div>
                <button
                  className={style.elem_button}
                  onClick={() => {
                    onEdit(elem.id);
                    setEditHide(false);
                  }}
                  type="button"
                >
                  Edit
                </button>
              </div>
            )
          )}
          <button
            type="button"
<<<<<<< HEAD
            className={style.deletebuttons}
=======
            className={style.deleteButton}
>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
            onClick={allDeleteExpanses}
          >
            DELETE ALL
          </button>
          <div className={style.page}>
            <button
<<<<<<< HEAD
              className={style.buttons}
=======
              className={style.button}
>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
              type="button"
              disabled={page <= 1}
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Prev
            </button>
            <button className={style.button}>{page}</button>
            <button
<<<<<<< HEAD
              className={style.buttons}
=======
              className={style.button}
>>>>>>> 55d74f266efc98d35d6f1c0975505fa940c59f7e
              type="button"
              disabled={page >= totalPages}
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Next
            </button>
          </div>
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
