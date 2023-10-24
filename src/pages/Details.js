import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "../style/Detail.css";
import "../style/Detail.mobile.css"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Detail() {
  const { slug } = useParams();
  const [detailMovie, setDetailMovie] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:3000/api/movies.json")
        .then((response) => {
          if (response.status === 200) {
            setDetailMovie(
              response.data.find(
                (item) => item.title.toLowerCase().split(" ").join("-") === slug
              )
            );
          }
        })
        .catch((error) => console.log(`Error : ${error}`));
    }, 3000);
  }, []);

  return (
    <>
      <div id="detail_page">
        <header className="container py-4 mb-5">
          {/* navbar */}
          <Navbar />
          {/* start content */}

          {detailMovie === null ? (
            <>
              <div 
                className="d-flex justify-content-center align-items-center mt-10 mb-2" 
                style={{height:"100vh", flexDirection:"column"}}
              >
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading..</span>
                </div>
                <p className="text-center">Loading...</p>
              </div>
            </>
          ) : null}

          {detailMovie !== null ? (
            <section id="header_content">
              <div className="row justify-content-evenly pt-5">
                <div className="col-md-3 col-xs-12">
                  <div className="border-img">
                    <img src={detailMovie.poster} width="100%" alt="poster" />
                  </div>
                </div>
                <div className="col-md-9 col-xs-12 content-main">
                  <h1>{detailMovie.title}</h1>
                  <p className="genres">
                  {detailMovie.genres.map((item ,key) => (
                    <span>{detailMovie.genres.length -1 === key ? item : `${item}, `}</span>
                  ))}
                  </p>

                  <div className="row">
                    <div className="col-md-4">
                      <div>
                        <p
                          className="text-muted"
                          style={{ fontSize: "14px", marginBottom: 0 }}
                        >
                          Release Date
                        </p>
                        <p>June, 22 2019</p>
                      </div>
                      <div>
                        <p
                          className="text-muted"
                          style={{ fontSize: "14px", marginBottom: 0 }}
                        >
                          Duration
                        </p>
                        <p>{detailMovie.duration}</p>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div>
                        <p
                          className="text-muted"
                          style={{ fontSize: "14px", marginBottom: 0 }}
                        >
                          Directed by
                        </p>
                        <p>{detailMovie.director}</p>
                      </div>
                      <div>
                        <p
                          className="text-muted"
                          style={{ fontSize: "14px", marginBottom: 0 }}
                        >
                          Caster
                        </p>
                        <p>
                          {detailMovie.cast.map((item, key) => (
                            <span>
                              {detailMovie.cast.length - 1 === key
                                ? item 
                                : `${item}, `}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <h5>Synopsis</h5>
                  <p
                    className="mt-3"
                    style={{ color: "#4E4B66", fontSize: "15px" }}
                  >
                    John Bennett, a man whose childhood wish of bringing his
                    teddy bear to life came true, now must decide between
                    keeping the relationship with the bear, Ted or his
                    girlfriend, Lori.
                  </p>
                </div>
              </div>
            </section>
          ) : null}
        </header>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
