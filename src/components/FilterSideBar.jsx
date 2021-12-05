import React,{useRef,useState} from "react";
import FilterSideItem from "./FilterSideItem.jsx";

function FilterSideBar(){

const [clicked,setClick] = useState(false);


function clicker(e){
  console.log("click");
setClick(prevValue => !prevValue);
}

let rotate= {transform: clicked?"rotate(180deg)":"rotate(0deg)"};
let height = {height:clicked?"5px":""};
  return(<div className="filter-side-bar">
  <button className="filter-side-bar--dropbutton" onClick={clicker}><span>Filters</span> <i  style={rotate} class="fas fa-chevron-up"></i></button>
<div className="filter-side-bar--inner-large" style={height}>

<FilterSideItem/>
<FilterSideItem/>



</div>

  </div>);
}

export default FilterSideBar;
