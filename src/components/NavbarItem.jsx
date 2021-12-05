import React from "react";

function NavbarItem(prop){


return (<div className="navbar-item" id={prop.idName}>

{prop.innerComp}

</div>);
}


export default NavbarItem;
