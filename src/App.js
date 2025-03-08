import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Section */}
        <div className="col-md-2 p-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-9 p-4">
          <h1 className="text-center mb-4">All Tasks</h1>
          <Routes>
            <Route path="/tasks" element={isAuthenticated ? (
              <>
                <TaskInput />
                <TaskList />
              </>
            ) : (
              <Navigate path="/" />
            )}
            />
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;