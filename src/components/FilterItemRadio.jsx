import React from "react";

function FilterItemRadio(props){

return (<div className="filter-item--radio-button">
    <input type="radio" id="CBSE" name="fav_language" value="CBSE"/><label for="CBSE">{props.filterName}</label>
</div>);
}

export default FilterItemRadio;
