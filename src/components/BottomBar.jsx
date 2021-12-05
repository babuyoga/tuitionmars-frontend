import React from "react";
import MenuItem from "./MenuItem.jsx";

function BottomBar(){
const icons = ["fas fa-list","fas fa-clipboard-check","fas fa-heart","fas fa-bell","fas fa-user"];
function item(iconname){
  const iconNm = iconname;
    return(<MenuItem iconClass={iconNm}></MenuItem>);
  }

  return (<div className="bottombar">
  {icons.map(item)}
</div>);
}

export default BottomBar;
