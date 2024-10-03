import React, { useState } from "react";
import LogoTodo from "../../assets/";
import FormTask from "../form/FormTask";
import "./Header.css";
const Header = ({ handleAddTask }) => {
return (
<header className="header-container">
<img src={LogoTodo} />
{<FormTask handleAddTask={handleAddTask} /> }
</header>
);
};
export default Header;