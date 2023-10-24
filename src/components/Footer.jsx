import React from "react";
import IconText from "./Icon_txt"

function footer() {
  return (
    <>
      <footer className="container pb-3 mt-10 pt-5">
        <div className="row ">
          <div className="col-sm-3 pt-4 col-xs-12">
            <div className="d-flex justify-content-center-mobile">
              <img src="/img/icon_nav.jpg" alt="logo" />
            </div>
            <p className="text-center-mobile pt-3" style={{ color: "grey" }}>
              Stop waiting in line. Buy Tickets <br />
              conviniently, watch movies quitely
            </p>
          </div>

          <div className="col-sm-3 pt-4 col-xs-12">
            <h6 className="mb-4 text-center-mobile">Explore</h6>
            <a
              className="text-center-mobile"
              style={{ display: "block", fontWeight: "300" }}
              href="/"
            >
              Home
            </a>
            <a
              className="text-center-mobile"
              style={{ display: "block", fontWeight: "300" }}
              href="/"
            >
              Book
            </a>
          </div>
          <div className="col-sm-3 pt-4 col-xs-12">
            <h6 className="mb-4 text-center-mobile">Sponsor</h6>
            <div className="d-flex justify-content-center-mobile">
              <img
                className="mb-3"
                style={{ display: "block" }}
                src="/img/ebu_id.jpg"
                alt="sponsor"
              />
            </div>
            <div className="d-flex justify-content-center-mobile">
              <img
                className="mb-3"
                style={{ display: "block" }}
                src="/img/hiflix.jpg"
                alt="sponsor"
              />
            </div>
            <div className="d-flex justify-content-center-mobile">
              <img
                className="mb-3"
                style={{ display: "block" }}
                src="/img/cineone21.jpg"
                alt="sponsor"
              />
            </div>
          </div>
          <div className="col-sm-3 pt-4 col-xs-12">
            <h6 className="mb-4 text-center-mobile">Follow Us</h6>
            <IconText icon="/img/icon_media/fbk_icon.jpg" text="Tickitz Cinema Id"/>
            <IconText icon="/img/icon_media/inst_icon.jpg" text="tickitz.id"/>
            <IconText icon="/img/icon_media/twt_icon.jpg" text="tickitz.id"/>
            <IconText icon="/img/icon_media/yt_icon.jpg" text="Tickitz Cinema Id"/>
          </div>
        </div>
        <p className="text-center mt-5">© 2020 Tickitz. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default footer