import React, { useEffect, useState } from "react";
import { Checkbox, Input } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";
//
import userImg from "../asset/User.png";
import clockImg from "../asset/Clock.png";
import btnAddImg from "../asset/Plus-circle.png";
//
import { getTask } from "../service/GetData";
//
import "./Dashboard.css";

type TTask ={
    id: number,
    name: string,
    completed: boolean,
    createdAt: string,
}

function Dashboard() {
  const fomatDate = (date: any) => {
    return moment(date).format("h a");
  };
  const [taskList, setTasksList] = useState<TTask[]>([]);
  useEffect(() => {
    const fetchListTodo = async () => {
      try {
        const dataListTodo = await getTask("tasks");
        setTasksList(dataListTodo);
      } catch (error) {}
    };
    fetchListTodo();
  }, []);
  return (
    <div className="main-dashboard">
      <div className="user-info">
        <div className="circle-user">
          <img src={userImg} alt="User Img" />
        </div>
        <h2>Monica Gamage</h2>
        <p>@monicagamage</p>
        <button className="btn-logout">
          <Link to="/login" className="logout-link">
            Logout
          </Link>
        </button>
      </div>
      <div className="todo-list">
        <div className="clock-img">
          <img src={clockImg} alt="clock" />
          <h2>Good afternoon</h2>
        </div>
        <div className="task-form">
          <h2>tasks list</h2>
          <div className="task-list">
            <div className="task-input">
              <Input className="input-task" placeholder="Tasks List"></Input>
              <button className="btn-add-task">
                <img src={btnAddImg} alt="button add" />
              </button>
            </div>
            <ul className="nav-task">
              {taskList &&
                taskList.map((todo) => {
                  return (
                    <li className="force-overflow" key={todo.id}>
                      <Checkbox defaultChecked={todo.completed} />
                      <span>
                        &nbsp;
                        {todo.name} create at {fomatDate(todo.createdAt)}
                      </span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
