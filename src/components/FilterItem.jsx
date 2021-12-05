import React, {useState, useEffect, useRef} from "react";
import FilterItemRadio from "./FilterItemRadio";

function FilterItem(prop){
let visibleasf = {display:"flex"};
let hidden = {display:"none"};
let clickedbutton = {backgroundColor:"#9DA9C1",
color:"#22232F"};
const ref = useRef();

const [clicked,setStyle]= useState(false);

useEffect(()=> {
const clickedOut = (e) => {
  if(clicked && ref.current && !ref.current.contains(e.target)){
    setStyle(false);
  }
}

document.addEventListener("mousedown", clickedOut)
return () => {
  document.removeEventListener("mousedown",clickedOut)
}

}, [clicked]);

function handleChange(){
  setStyle(prevValue => !prevValue);
}


return (<div className="filter-item" ref={ref}>
  <button className="filter-item--button" onClick={handleChange} style={clicked?(clickedbutton):({})}>{prop.name}</button>
  <div className="filter-item--menu" style={clicked?(visibleasf):(hidden)}>
<FilterItemRadio filterName="CBSE"/>
<FilterItemRadio filterName="CBSE"/>
<FilterItemRadio filterName="CBSE"/>

    </div>
</div>);

}

export default FilterItem;
