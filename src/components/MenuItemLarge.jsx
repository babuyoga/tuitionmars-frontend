import React from "react";

function MenuItemLarge(prop) {
  return(<div className="menu-item-large"><i className={prop.iconObj.iconClass}></i><span className="icon-text">{prop.iconObj.iconText}</span></div>);
}


export default MenuItemLarge;
