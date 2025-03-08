import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTaskPriority } from "../features/todo/todoSlice";
import { getWeather } from "../services/weatherService";
import Auth from "./Auth";

const TaskList = () => {
    const tasks = useSelector((state) => state.todo.tasks);
    const dispatch = useDispatch();
    const [weather, setWeather] = useState(null);

    const hasOutdoorTasks = tasks.some((task) => task.category === 'outdoor');

    useEffect(() => {
        if (hasOutdoorTasks) {
            const fetchWeather = async () => {
                const data = await getWeather('New York');
                setWeather(data);
            };
            fetchWeather();
        }
    }, [hasOutdoorTasks]);

    return (
        <div className="container mt-4">
            <div className="row">

                {/* Task List Section */}
                <div className="col-md-8">
                    <div className="list-group">
                        {tasks.map((task) => (
                            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center mb-2 shadow-sm">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id={`task-${task.id}`} />
                                </div>
                                <label className="form-check-label" htmlFor={`task-${task.id}`}>{task.text}</label>
                                {task.category === 'outdoor' && weather && (
                                    <div className="mt-2 p-2">
                                        <small className="text-muted">
                                            Weather: {weather.weather[0].description}, Temperature:{' '}
                                            {(weather.main.temp - 273.15).toFixed(2)}°c
                                        </small>
                                    </div>
                                )}
                                <div>
                                    <select className="form-select me-2" value={task.priority} onChange={(e) => dispatch(updateTaskPriority({ id: task.id, priority: e.target.value }))}>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                    <button className="btn btn-danger mt-4" onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </div>
                </div>
                <Auth />
            </div>
        </div>
    );
};

export default TaskList;