import React, {useState} from 'react'

import { BrowserRouter, Route,Switch,Redirect } from "react-router-dom";

function InputComp(){
    const[job,setJob] = useState([])
    const [inputvalue,setInputvalue] = useState([]);
    const[task,setTask] = useState([])
    const [inputtask,setInputtask] = useState([]);
    const addTodo = () => {
        setJob((data) => data.concat([inputvalue]));
      };
      const addTodoTask = () => {
        setTask((data) => data.concat([inputtask]));
      };
      const deleteToDo = (index) => 
        {setJob((job.filter((item, idx) => idx !== index && idx+1)))}
    const deleteToDoTask = (indexx) => 
        {setTask((task.filter((item, idx) => idx !== indexx && idx+1)))}

    return(
        <div className="Container">
        <div className ="Display" >
            <input type = 'text' value = {inputvalue} onChange = {(e) => setInputvalue(e.target.value) }/>
            <button onClick={addTodo}>Daily to do Task</button>
            <ul>
              {job.map((todo, index) => (
                <li key={index}>
                  <h5>{todo}</h5>
                <button onClick={() => {deleteToDo(index)}}>X</button>
                </li>
              ))}
            </ul>     
        </div>

        <div className ="Display">
        <input type = 'text' value = {inputtask} onChange = {(e) => setInputtask(e.target.value) }/>
        <button onClick={addTodoTask}>Monthly to do app
        </button>
        <ul>
          {task.map((todo, indexx) => (
            <li key={indexx}>
            <h5>{todo}</h5>
            <button onClick={() => {deleteToDoTask(indexx)}}>X</button>
            </li>
          ))}
        </ul>
    </div>

    <BrowserRouter>
         <Switch>
           {/* <Redirect exact from="/" to="/todo"/> */}
           {/* <Route path="/todo" /> */}
           <Route path="/DailyToDoTask"/>
            <addTodo/>
            <Route path="/MonthlyToDoTask"/>
            <addTodoTask/>
         </Switch>
        </BrowserRouter>
    </div> 

    )
}

export default InputComp