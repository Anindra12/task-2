import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";

const AddEditTask = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const isEdit = Boolean(id);
  const taskIndex = isEdit ? parseInt(id) : -1;
  const taskToEdit = isEdit ? location.state : null;

  const handleSubmit = (task) => {
    let updatedTasks;
    if (isEdit && taskToEdit) {
      updatedTasks = [...tasks];
      updatedTasks[taskIndex] = task;
    } else {
      updatedTasks = [...tasks, task];
    }

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    navigate("/");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{isEdit ? "Edit Task" : "Add Task"}</h2>
      <TaskForm onSubmit={handleSubmit} initialData={taskToEdit}/>
    </div>
  );
};

export default AddEditTask;