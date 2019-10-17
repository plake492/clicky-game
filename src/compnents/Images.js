import React from "react";

function Images(props) {
  // console.log(props.id);
  return (
    <div className="imgBox__pic">
      <img
        className="imgBox__pic--singleImg"
        src={props.image}
        alt={props.id}
        onClick={props.handleImageClick.bind(this, props.id, props.beenClicked)}
      ></img>
    </div>
  );
}

export default Images;
