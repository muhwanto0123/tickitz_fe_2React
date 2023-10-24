import React from "react";
import { Link } from "react-router-dom";

// import "../style/App.css";
// import "../style/App.mobile.css";

function Book(props) {
  const { poster, title, genres } = props;

  return (
   
        <div className="image-poster">
          <Link to={`/detail/${title.toLowerCase().split(" ").join("-")}`} >
            <img className="poster_img" src={poster} width="100%" height="350px" />
          </Link>
          <h3 className="text-center mt-3 single-text"> {title} </h3>
          <span
            className="text-muted text-center"
            style={{ fontSize: "14px" }}
          >
            {genres.map((item, key) => (
              <span>{genres.length - 1 === key ? item : `${item}, `}</span>
            ))}
          </span>
          <Link to={`/detail/${title.toLowerCase().split(" ").join("-")}`}>
            <div className="d-grid mt-2">
              <button className="btn btn-dark">Details</button>
            </div>
          </Link>
        </div>
  );
}

export default Book;
