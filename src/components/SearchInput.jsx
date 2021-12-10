import React, {useState} from "react";


function SearchInput(){


return (
<div className="search-holder">
  <form action="/" method="get" autocomplete="off">
<input type="text" autocomplete="off" id="header-search" placeholder="Find resources" name="s"/> <button type="submit"><i class="fas fa-search" id="search-icon-fontaw"></i></button></form>
</div>);

}


export default SearchInput;
