import React from "react";
import MenuItem from "./MenuItem.jsx";

function MenuButtonHolder(){

  const icons = ["fas fa-list","fas fa-clipboard-check","fas fa-heart","fas fa-bell","fas fa-user"];

  function item(iconname){return(<MenuItem iconClass={iconname}></MenuItem>);}

  return (<div className="menu-button-holder">
  {icons.map(item)}
  </div>);

}

export default MenuButtonHolder;
