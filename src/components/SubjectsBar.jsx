import React, {useState} from "react";

function SubjectsBar(){


let subjects = ["Mathematics", "Physics","Biology","Computer Science","Computer","English","Chemistry","Geology","Politics","Economics"];
function SubjectItem(sub){
  return(<button className="subjects-bar-item">{sub}</button>);
}

let [subjectsFil,NextSub] = useState(subjects.slice(0,5));

function NextSet(){
let n = 5;
NextSub(subjects.slice(n,n+5));
console.log("Function Called");
console.log(n);
}


function SubjectItemButton(icon){
  if(icon ===1){
  return(<button className="subjects-bar-item--button" onClick={NextSet}><i class="fas fa-chevron-right"></i></button>);
}else{
  return(<button className="subjects-bar-item--button"><i class="fas fa-chevron-left"></i></button>);
}

}

return (
  <div className="subjects-bar">
    <div className="subject-filler"></div>
  {SubjectItemButton()}


{subjectsFil.map(SubjectItem)}

{subjectsFil.map(SubjectItem)}

{SubjectItemButton(1)}
  <div className="subject-filler"></div>
  </div>
);

}

export default SubjectsBar;
