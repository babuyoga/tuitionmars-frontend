import React, {useState} from "react";


function SearchInput(prop){



return (
<div className="search-holder">
  <form onSubmit={prop.searchfunction} autocomplete="off">
<input type="text" autocomplete="off" id="header-search" placeholder="Find resources" name="searchstring"/> <button type="submit"><i class="fas fa-search" id="search-icon-fontaw"></i></button></form>
</div>);

}


export default SearchInput;
