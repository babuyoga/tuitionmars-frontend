import React from "react";
import FilterItem from "./FilterItem.jsx";

function Filters(){
  return (<div className="filter-holder">
<FilterItem name="Syllabus"/><FilterItem name="Type"/><FilterItem name="Grade"/>
     </div>);
}

export default Filters;
