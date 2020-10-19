import React, { useEffect, useState } from "react";
import Web3 from 'web3';
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from "./config";
import "./App.css";

function App() {
  const [account, setAccount] = useState("");
  const [taskCount, setTaskCount] = useState(0);
  const [tasks,setTasks]=useState([]);
  async function loadBlockChainData() {
    if (typeof window.ethereum !== "undefined") {
      const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7645");
      // const network = await web3.eth.net.getNetworkType();
      const accounts = await web3.eth.getAccounts();
      console.log(await web3.eth.getAccounts());
      setAccount(accounts[0]);
      console.log(taskCount);
      console.log(account);
      const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS);
      const taskC = await todoList.methods.taskCount().call();
      setTaskCount(taskC);
      for (let i = 0; i <=taskC; i++) {
        const task = await todoList.methods.tasks(i).call();
        setTasks([...tasks,task])
      }
      console.log(tasks);
    } else {
      window.alert("No tienes instalado Metamask");
    }
  }
  useEffect(() => {
    loadBlockChainData();
  }, []);

  return (
    <div className="Container">
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
          Todo List
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small>
              <a className="nav-link" href="#">
                <span id="account"></span>
              </a>
            </small>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex justify-content-center">
            <div id="loader" className="text-center">
              <p className="text-center">Loading...</p>
            </div>
            <div id="content">
              <form>
                <input
                  id="newTask"
                  type="text"
                  className="form-control"
                  placeholder="Agregar tarea..."
                  required
                />
                <input type="submit" className="btn btn-primary btn-block mt-3" hidden="" />
              </form>
              <ul id="taskList" className="list-unstyled">
                {
                  tasks.map((task)=>(
                      <div className="taskTemplate" key={task.id}>
                        <label htmlFor="">
                          <input type="checkbox" name="" id=""/>
                          <span className="ml-3 content">{task.content}</span>
                        </label>
                      </div>
                  ))
                }
              </ul>
              <ul id="completedTaskList" className="list-unstyled"></ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
