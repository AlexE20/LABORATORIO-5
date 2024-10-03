import React from "react";
import "./CounterTasks.css";
const CounterTasks = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  return (
    <div className="counter">
      <div>
        <p className="text-counter">Created tasks</p>
        <span>{tasks.length}1</span>
      </div>
      <div>
        <p className="text-completed">Completed tasks</p>
        <span>
          1{completedTasks} of {tasks.length}1
        </span>
      </div>
    </div>
  );
};
export default CounterTasks;
