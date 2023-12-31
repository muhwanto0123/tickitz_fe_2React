import "../style/App.css";
import "../style/App.mobile.css";

import NavbarCompont from "../components/Navbar";
import MovieCompont from "../components/Movies_content";
import Footer from "../components/Footer";

import React from "react";
import axios from "axios";

function Home() {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "short" });

  const [resultNowShowing, setResultNowShowing] = React.useState([]);
  const [resultUpcoming, setResultUpcoming] = React.useState([]);
  const [selectMonth, setSelectMonth] = React.useState(
    month.toLocaleLowerCase()
  );

  // Lifecycle
  const handleGetResponse = async () => {
    try {
      const nowShowing = await axios.get(
        "https://tickitz-be.onrender.com/gusti/movie/now-showing"
      )
      
      if (nowShowing.status === 200) {
        setResultNowShowing(nowShowing.data.data);
      }

      const upComing = await axios.get(
        "https://tickitz-be.onrender.com/gusti/movie/upcoming"
      )

      if (upComing.status === 200) {
        setResultUpcoming(upComing.data.data);
      }
    } catch (error) {
      console.log(`Error : ${error}`)
    }
  };

  React.useEffect(() => {
    handleGetResponse();
  }, []);

  return (
    <div id="homePage">
      <header>
        <NavbarCompont />

        {/* // <!-- conten first page --> */}
        <section>
          <div className="container text-center mt-10 pt-4">
            <div className="row align-items-center">
              <div className="col-sm-6 col-xs-12">
                <span className="text-muted">Nearest Cinema, Newest Movie</span>
                <h1 className="text-primary">Find out now!</h1>
              </div>
              <div className="col-md-6 col-xs-12">
                <img
                  className="gambar pt-2"
                  src="../img/logo_tiket.jpg"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </section>
      </header>

      <section>
        <div className="container py-5 pt-5">
          <div className="d-flex justify-content-between">
            <h3 className="text-primary">Now Showing</h3>
            <a className="text-primary">View All</a>
          </div>
          <div className="scrollmenu">
            <div className="container">
              <a>
                <div className="d-flex gap-3 justify-content-around mt-5">
                  {resultNowShowing.slice(0, 5).map((item) => (
                    <MovieCompont
                      poster={item.poster}
                      genres={item.genres}
                      title={item.title}
                      desc={item.desc}
                      slug={item.slug}
                    />
                  ))}
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5 pt-5">
          <div className="d-flex justify-content-between">
            <h3 className="text-primary">Upcoming Movie</h3>
            <a className="text-primary">View All</a>
          </div>

          <div className="scrollmenu">
            <div className="container">
              <a>
                <div className="d-flex gap-3 justify-content-around mt-5">
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "Mei",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Des",
                  ].map((item) => (
                    <button
                      className={
                        selectMonth === item.toLocaleLowerCase()
                          ? "btn btn-dark px-4"
                          : "btn btn-outline-dark px-4"
                      }
                      onClick={() => {
                        setSelectMonth(item.toLocaleLowerCase());
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </a>
            </div>
          </div>

          <div className="scrollmenu">
            <div className="container">
              <a href="/">
                <div className="d-flex gap-3 justify-content-around mt-5">
                  {resultUpcoming
                    .filter((item) => item.month_show === selectMonth)
                    .slice(0, 5)
                    .map((item) => (
                      <MovieCompont
                        poster={item.poster}
                        genres={item.genres}
                        title={item.title}
                        desc={item.desc}
                        slug={item.slug}
                      />
                    ))}
                </div>
              </a>
            </div>
          </div>
        </div>
        {resultUpcoming
          .filter((item) => item.month_show === selectMonth).length === 0 ? (
          <p className="text-center" style={{ fontSize: "20px" }}>
            Movie Not Found
          </p>
        ) : null}
      </section>

      <section id="cta" className="mt-10">
        <div className="container pt-5">
          <span className="text-muted text-center">Be the vanguard of the</span>
          <h1 className="text-primary text-center">Moviegoers</h1>

          <div className="d-flex gap-2 justify-content-center mt-5 mb-4">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput"
              placeholder="example@email.com"
              style={{ width: "300px" }}
            />
            <button className="btn btn-dark"> Join Now </button>
          </div>

          <p
            className="text-center text-center-mobile"
            style={{ color: "grey" }}
          >
            Please join and we will provide the latest updated information{" "}
            <br />
            via your email
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
