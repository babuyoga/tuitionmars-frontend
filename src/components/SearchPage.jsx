import React,{useState,useEffect} from "react";
import FilterSideBar from "./FilterSideBar.jsx";
import TopNavbar from "./TopNavbar.jsx";
import SubjectsBar from "./SubjectsBar.jsx";
import ProdCard from "./ProdCard.jsx";


function SearchPage() {
  let cardprop = {chapterName:"Heat",
                    subject:"Physics",
                  gradeLevel:"10",
                chapterNum:"1",
              rating:5,
            type:"PPT",
          pages:21,
        language:"English",
      syllabus:"CBSE",
    contentType:"Interactive"};



return ( <div>
  <TopNavbar/>
  <div className="everything-container">
<div className="everything-else-container">
     <FilterSideBar/>
      <div className="searchresultcontainer">
<SubjectsBar/>
<div className="results-container">
<ProdCard propobj={cardprop}/><ProdCard propobj={cardprop}/><ProdCard propobj={cardprop}/>
<ProdCard propobj={cardprop}/><ProdCard propobj={cardprop}/><ProdCard propobj={cardprop}/>
<ProdCard propobj={cardprop}/><ProdCard propobj={cardprop}/><ProdCard propobj={cardprop}/>
</div>

      </div>

</div>
</div>
</div>);


}
export default SearchPage;
