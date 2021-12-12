import React,{useState,useEffect} from "react";
import FilterSideBar from "./FilterSideBar.jsx";
import TopNavbar from "./TopNavbar.jsx";
import SubjectsBar from "./SubjectsBar.jsx";
import ProdCard from "./ProdCard.jsx";
import axios from 'axios';

function SearchPage() {

  function searchResults(propObj){
    return (<ProdCard propobj={propObj}/>);
  }


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

function searchEverything(searchParam){

  console.log(searchParam);
}

let [searchRes,setResult] = useState([]);

async function hitDB(searchString){
setResult([]);
  try{
    await axios.get("http://localhost:4000/fr/"+searchString).then((response)=> setResult(response.data));
}

catch(error){

  console.log(error);
}
}

function searchandReturn(e){
   e.preventDefault();
   let searchString=e.target[0].value;
  console.log(e.target[0].value + " from client");
  hitDB(searchString);
}

return ( <div>
  <TopNavbar searchfunction={searchandReturn}/>
  <div className="everything-container">
<div className="everything-else-container">
     <FilterSideBar/>
      <div className="searchresultcontainer">
<SubjectsBar/>
<div className="results-container">
<ProdCard propobj={cardprop}/><ProdCard propobj={cardprop}/><ProdCard propobj={cardprop}/><ProdCard propobj={cardprop}/>
{searchRes.map(searchResults)}
</div>

      </div>

</div>
</div>
</div>);


}
export default SearchPage;
