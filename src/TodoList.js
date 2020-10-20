import React,{useState} from "react";
function TodoList({tasks, createTask, completed}) {
    const [value,setValue] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        createTask(value);
    }
    const handleInputChange=(e)=>{
        setValue(e.target.value);
    }
    const Completed= (id)=>{
        console.log(id);
        completed(id);
    }
    return (
        <div id="content">
        <form onSubmit={handleSubmit}>
            <input
            id="newTask"
            type="text"
            className="form-control"
            placeholder="Nueva tarea..."
            required
            onChange={handleInputChange}
            />
            <input
            type="submit"
            className="btn btn-primary btn-block mt-3"
            hidden=""
            value="Agregar tarea"
            />
        </form>
        <ul id="taskList" className="list-unstyled">
            {tasks.map((task) => (
            <div className="taskTemplate" key={task.id}>
                <label htmlFor="">
                <input type="checkbox" defaultChecked={task.completed} onChange={()=>Completed(task.id)} name="" id="" />
                <span className="ml-3 content">{task.content}</span>
                </label>
            </div>
            ))}
        </ul>
        <ul id="completedTaskList" className="list-unstyled"></ul>
        </div>
    );
}

export default TodoList;
