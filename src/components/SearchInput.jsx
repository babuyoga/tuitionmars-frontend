import React, {useState} from "react";


function SearchInput(){


return (
<div className="search-holder">
  <form action="/" method="get" autocomplete="off">
<input type="text" autocomplete="off" id="header-search" placeholder="Find resources" name="s"/> <button type="submit"><i class="fal fa-search"></i></button></form>
</div>);

}


export default SearchInput;
