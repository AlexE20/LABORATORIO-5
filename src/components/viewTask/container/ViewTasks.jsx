import React from "react";
import Task from "../../task/Task";
import CounterTasks from "../counter/CounterTasks";
import "./ViewTasks.css";
const ViewTasks = ({ tasks, deleteTaskById, onCompletedTask }) => {
  return (
  <section className="tasks-container">
  <CounterTasks tasks={tasks} />
  <div className="list-tasks">
  {tasks.map((task) => (
  <Task
  key={task.id}
  task={task}
  deleteTaskById={deleteTaskById}
  onCompletedTask={onCompletedTask}
  />
  ))}
  </div>
  </section>
  );
  };

export default ViewTasks;