import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <>
      {/* This is the footer of the website */}
      <div className="d-flex flex-column ">
        <footer
          className={`text-center fixed-bottom text-lg-start  bg-${
            props.mode === "light" ? "light" : "dark"
          } text-${props.mode === "light" ? "dark" : "light"}`}
          style={{ position: "relative", top: "0px", zIndex: "-1" }}
        >
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i> TOPIC
                  </h6>
                  <p style={{ textAlign: "justify" }} />
                  <h1>text and discription</h1>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Destinations</h6>
                  <p>
                    <Link to="/place1" className="text-reset">
                      Shimla
                    </Link>
                  </p>
                  <p>
                    <Link to="/place2" className="text-reset">
                      Goa
                    </Link>
                  </p>
                  <p>
                    <Link to="/place3" className="text-reset">
                      Ooty
                    </Link>
                  </p>
                  <p>
                    <Link to="/place4" className="text-reset">
                      Ladakh
                    </Link>
                  </p>
                  <p>
                    <Link to="/place5" className="text-reset">
                      Jaisalmer
                    </Link>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i> IIITDM KANCHEPURAM,
                    TN-600127, India
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    CS20B1059@iiitdm.ac.in
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> +91 8919189465
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          ></div>
        </footer>
      </div>
    </>
  );
}
