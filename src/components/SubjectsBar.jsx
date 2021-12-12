import React, {useState,useEffect} from "react";
import axios from 'axios';


function SubjectsBar(){


  let [subjects,setSub] = useState([]);

let [index,changeIndex] = useState({lowInd:0,highInd:10});
let [low,high] = [index.lowInd,index.highInd];

async function getData(){
    try{
      await axios.get("http://localhost:4000/").then((response)=> setSub(response.data));
}

  catch(error){

    console.log(error);
  }
}

let length = subjects.length;



useEffect(()=>{
getData();
},[]);

function moveUp(){
if(high+5>length){
  changeIndex(prevValue => {
    return {
      lowInd:length-10,
      highInd:length
    }
  })
}else {changeIndex(prevValue => {
  return {
    lowInd:low+4,
    highInd:prevValue.highInd+4
  }
})}
}

function moveDown(){
  if(low-5<0){
    changeIndex(prevValue => {
      return {
        lowInd:0,
        highInd:10
      }
    })
  }else {
  changeIndex(prevValue => {
    return {
      lowInd:low-4,
      highInd:prevValue.highInd-4
    }
  })
}
}


function filterSubjects(e){
  console.log(e.target.id+" From client");

   axios.get("http://localhost:4000/subjects/"+ e.target.id).then((response)=> console.log(response.data));

}


function SubjectItem(sub){

  return(<button key={sub.id} id={sub.subject} className="subjects-bar-item" onClick={filterSubjects}>{sub.subject}</button>);
}


function SubjectItemButton(icon){
  if(icon ===1){
  return(<button className={high===length?"subject-blocked-button":"subjects-bar-item--button"}   onClick={moveUp}><i className="fas fa-chevron-right"></i></button>);
}else{
  return(<button className={low===0?"subject-blocked-button":"subjects-bar-item--button"}   onClick={moveDown}><i className="fas fa-chevron-left"></i></button>);
}

}

return (
  <div className="subjects-bar">
    <div className="subject-filler"></div>
  {SubjectItemButton()}


{subjects.slice(low,high).map(SubjectItem)}


{SubjectItemButton(1)}
  <div className="subject-filler"></div>
  </div>
);

}

export default SubjectsBar;
