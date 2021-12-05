import React from "react";


function FilterSideItem(prop){

function FilterInnerItem(){
  return(<div className="filter-side-inner--item"><input type="checkbox" id="Syllabus1" name="vehicle1" value="CBSE"></input><label className="filter-side-inner--item-text" for="Syllabus1">CBSE</label></div>);
}


return(<div className="filter-side-inner--item-holder">

{FilterInnerItem()}
{FilterInnerItem()}
{FilterInnerItem()}

</div>);

}

export default FilterSideItem;
