import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/todo/todoSlice";

const TaskInput = () => {
    const [task, setTask] = useState('');
    const [category, setCategory] = useState('indoor');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            dispatch(addTask({ id: Date.now(), text: task, priority: 'Medium', category: category, }));
            setTask('');
        }
    };

    return (
        <div className="mb-4">
            <form onSubmit={handleSubmit} className="d-flex">
                <input type="text" className="form-control me-2" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a new task" />
                <select className="form-select me-2"value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="indoor">Indoor</option>
                    <option value="outdoor">Outdoor</option>
                </select>
                <button type="submit" className="btn btn-success">Add Task</button>
            </form>
        </div>
    );
};

export default TaskInput;