import React, {useRef,useState,useEffect} from "react";
import MenuItemLarge from "./MenuItemLarge.jsx";

function MenuPopButton(){
const obj = [{iconClass:"fas fa-list",
iconText:"Lists"},
{iconClass:"fas fa-clipboard-check",
iconText:"Clipboard"},
{iconClass:"fas fa-heart",
iconText:"Favourites"},
{iconClass:"fas fa-bell",
iconText:"Notifications"},
{iconClass:"fas fas fa-user",
iconText:"Profile"} ];

function item(iconObj){return(<MenuItemLarge iconObj={iconObj}></MenuItemLarge>);}

  let visibleasf = {display:"flex"};
  let hidden = {display:"none"};
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




return (<div className="menu-drop-holder">
<button className="menu-pop-button" ref={ref} onClick={handleChange} ><i class="fas fa-bars"></i></button>
<div className="menu-drop-down" style={clicked?visibleasf:hidden}>
{obj.map(item)}</div>

   </div>);


}

export default MenuPopButton;
