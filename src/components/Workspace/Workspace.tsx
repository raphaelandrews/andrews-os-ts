import React, {useState} from "react";
import Icons from "../Icons/Icons";
import Modals from "../About/About";
import  SortableTable  from "../Table/Table";
import data from '../Table/data.json'
import "./style.css";
import Dashboard from "../Dashboard/Dashboard";


const Workspace = () => {
  
  return (
    <div className="container">
      <Dashboard />      
    </div>
  );
};

export default Workspace;
