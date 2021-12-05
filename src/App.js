import React from "react";
import BottomBar from "./components/BottomBar.jsx";
import TopNavbar from "./components/TopNavbar.jsx";
import ProdCard from "./components/ProdCard.jsx";
import Filters from "./components/Filters.jsx";
import FilterSideBar from "./components/FilterSideBar.jsx";
import SubjectsBar from "./components/SubjectsBar.jsx";

function App() {

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

  // return ( <div><TopNavbar/>
  //   <Filters/>
  //   <ProdCard propobj={cardprop}/>
  //   <BottomBar/></div> );
  return(<div><SubjectsBar/>
    </div>);
}

export default App;
