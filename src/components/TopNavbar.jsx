import React from "react";
import NavbarItem from "./NavbarItem.jsx";
import LogoDiv from "./LogoDiv";
import SearchInput from "./SearchInput.jsx";
import MenuButtonHolder from "./MenuButtonHolder.jsx";
import MenuPopButton from "./MenuPopButton.jsx";

function TopNavbar(prop){
return(<div className="topnavbar"><div className="topnavbar-width-control"><NavbarItem idName="logo" innerComp={<LogoDiv/>} ></NavbarItem><NavbarItem idName="searchbar" innerComp={<SearchInput searchfunction={prop.searchfunction}/>}></NavbarItem><NavbarItem idName="menu" innerComp={<div><MenuPopButton/><MenuButtonHolder/></div>}></NavbarItem></div></div>);
}

export default TopNavbar;
