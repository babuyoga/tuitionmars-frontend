import React from "react";
import NavbarItem from "./NavbarItem.jsx";
import LogoDiv from "./LogoDiv";
import SearchInput from "./SearchInput.jsx";
import MenuButtonHolder from "./MenuButtonHolder.jsx";
import MenuPopButton from "./MenuPopButton.jsx";

function TopNavbar(){
return(<div className="topnavbar"><div className="topnavbar-width-control"><NavbarItem idName="logo" innerComp={<LogoDiv/>} ></NavbarItem><NavbarItem idName="searchbar" innerComp={<SearchInput/>}></NavbarItem><NavbarItem idName="menu" innerComp={<div><MenuPopButton/><MenuButtonHolder/></div>}></NavbarItem></div></div>);
}

export default TopNavbar;
