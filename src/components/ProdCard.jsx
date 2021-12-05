import React from "react";

function ProdCard(props){

  let style = {
    marginBottom:"10px"
  };
 let style2 = {marginTop:"10px"};

let {chapterName,subject,gradeLevel,chapterNum,rating,type,pages,language,syllabus,contentType} = props.propobj;


return (
  <div className="prod-card">
    <div className="prod-card-img"></div>
    <div className="prod-card-txt">
      <div className="prod-card--txt-item"><h3>{chapterName}</h3></div>
      <div className="prod-card--txt-item"><h4>{subject}</h4></div>
      <div className="prod-card--txt-item" style={style}><p>Class {gradeLevel} - Chapter {chapterNum}</p></div>
      <div className="prod-card--txt-item"><p>{rating}</p></div>
      <div className="prod-card--txt-item"><p>Type: {type}   |  Pages: {pages}</p></div>
      <div className="prod-card--txt-item" style={style2}>Language: {language}  |  Syllabus: {syllabus}</div>
      <div className="prod-card--txt-item">{contentType}</div>

    </div>
  </div>
);
}

export default ProdCard;
