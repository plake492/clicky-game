import React from "react";

export default function Images(props) {
  return (
    <div className="imgBox__pic">
      <img
        style={{ width: "250px", height: "250px" }}
        src={props.image}
        alt=""
      ></img>
    </div>
  );
}
