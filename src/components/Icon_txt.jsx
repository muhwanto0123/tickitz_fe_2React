import React from "react";

function icon_text(props) {
  const {icon, text} = props

  return (
    <div className="d-flex gap-3 justify-content-center-mobile align-items-center">
      <img className="mb-2" src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
}

export default icon_text;