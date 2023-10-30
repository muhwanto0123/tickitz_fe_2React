import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import "../style/Detail.css";
import "../style/Detail.mobile.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Detail() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [detailMovie, setDetailMovie] = React.useState(null);
  const [listCinema, setListCinema] = React.useState([]);
  const [dateMovie, setDateMovie] = React.useState(null);
  const [timeMovie, setTimeMovie] = React.useState(null);

  const handleGetAPI = async () => {
    try {
      const detailMovie = await axios.get(
        `https://tickitz-be.onrender.com/gusti/movie/detail/${slug}`
      );

      if (detailMovie.data.data.length > 0) {
        setDetailMovie(detailMovie.data.data[0]);
      }

      const detailCinema = await axios.get(
        `https://tickitz-be.onrender.com/gusti/movie/${slug}/cinemas`
      );

      if (detailCinema.data.data.length > 0) {
        setListCinema(detailCinema.data.data);
      }
    } catch (error) {
      console.log(`Error : ${error}`);
    }
  };

  React.useEffect(() => {
    handleGetAPI();
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
                style={{ height: "100vh", flexDirection: "column" }}
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
                    {detailMovie.genres.map((item, key) => (
                      <span>
                        {detailMovie.genres.length - 1 === key
                          ? item
                          : `${item}, `}
                      </span>
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
        {/* start of cinemas */}
        <section className="container mt-5" id="cinemas">
          <h2 className="text-center" style={{ fontSize: "24px" }}>
            Show Times and Ticket
          </h2>
          <div className="d-flex gap-3 justify-content-center mt-3">
            <div style={{ width: "260px" }}>
              <input
                type="date"
                className="form-control"
                onChange={(e) => setDateMovie(e.target.value)}
              />
            </div>
            <select
              class="form-select form-select-sm"
              onChange={(e) => setTimeMovie(e.target.value)}
              style={{ width: "260px" }}
            >
              <option selected>Select time</option>
              <option value="10:00">10:00 WIB</option>
              <option value="13:00">13:00 WIB</option>
              <option value="16:00">16:00 WIB</option>
              <option value="19:00">19:00 WIB</option>
            </select>
          </div>
          <div className="row mt-5">
            {listCinema.map((item) => (
              <div className="col col-md-4">
                <div className="card_cinemas">
                  {/* head content */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      gap: "25px",
                      padding: "30px 30px 0px 30px",
                    }}
                  >
                    <img
                      src={item.logo}
                      width="105px"
                      // height="50px"
                      style={{ objectFit: "contain" }}
                      alt={item.name}
                    />
                    <div>
                      <h4>{item.name}</h4>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "grey",
                          margin: 0,
                        }}
                      >
                        {item.address}
                      </p>
                    </div>
                  </div>
                  <hr />
                  {/* buttom content */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "15px",
                      padding: "0px 30px 30px 30px",
                    }}
                  >
                    {item.movieStart.map((nestedItem) => (
                      <p style={{ color: "#4E4B66", fontSize: "13px" }}>
                        {nestedItem} WIB
                      </p>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px 30px 0px 30px",
                    }}
                  >
                    <p style={{ fontSize: "16px", color: "grey" }}>Price</p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Rp {item.priceDisplay}/Seat
                    </p>
                  </div>

                  <div
                    className="d-grid"
                    style={{ padding: "0px 30px 30px 30px" }}
                  >
                    <button
                      className={
                        dateMovie && timeMovie
                          ? "btn btn-primary"
                          : "btn btn-secondary"
                      }
                      onClick={() => {
                        if(dateMovie && timeMovie)
                          navigate(`/choose-seat/${slug}`,{
                              state: {
                                dateMovie,
                                timeMovie,
                                cinemaId: item.id,
                                movieTitle: detailMovie.title,
                                priceDisplay: item.priceDisplay,
                                price:item.price,
                                cinemaName: item.name,
                                cinemaLogo: item.logo,
                              },
                          })
                      }}
                      disabled={!dateMovie || !timeMovie}
                    >
                      Book Now
                    </button>
                  </div>
                  {/* end content */}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* end of cinemas */}
      </div>
      <Footer />
    </>
  );
}

export default Detail;
