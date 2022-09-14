import React, {useState} from "react";
import Icons from "../Icons/Icons";
import Modals from "../About/About";
import  SortableTable  from "../Table/Table";
import data from '../Table/data.json'
import "./style.css";


const Workspace = () => {
  
  
  return (
    <div className="container">
      <div className="bg__img"></div>
      <div className="overlay"></div>

      <Icons /> 
    </div>
  );
};

export default Workspace;
