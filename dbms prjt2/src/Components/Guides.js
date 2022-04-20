import React from "react";
import "../App.css";
import "./blogs.css";
import Image from "react-bootstrap/Image";
import "font-awesome/css/font-awesome.min.css";

export default function Blogs() {
  return (
    <>
      <div class="container mt-5 mb-5">
        <div class="d-flex justify-content-between mb-3">
          {" "}
          <p className="text-white">
            <h1>GUIDES</h1>
          </p>
          <span>
            <h1>GUIDES</h1>
          </span>{" "}
          <button class="btn btn-success add">Add guiders</button>{" "}
        </div>
        <div class="row g-2">
          <div class="col-md-3">
            <div class="card p-2 py-3 text-center" id="carde">
              <div class="img mb-2">
                {" "}
                <img
                  src="https://i.imgur.com/LohyFIN.jpg"
                  width="70"
                  class="rounded-circle"
                />{" "}
              </div>
              <h5 class="mb-0">guide</h5> <small>location</small>
              <div class="ratings mt-2">
                {" "}
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
              </div>
              <div class="mt-4 apointment">
                {" "}
                <button class="btn btn-success text-uppercase">
                  Book Appointment
                </button>{" "}
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card p-2 py-3 text-center" id="carde">
              <div class="img mb-2">
                {" "}
                <img
                  src="https://i.imgur.com/o5uMfKo.jpg"
                  width="70"
                  class="rounded-circle"
                />{" "}
              </div>
              <h5 class="mb-0">guide2</h5> <small>location</small>
              <div class="ratings mt-2">
                {" "}
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                <i class="fa fa-star"></i>{" "}
              </div>
              <div class="mt-4 apointment">
                {" "}
                <button class="btn btn-success text-uppercase">
                  Book Appointment
                </button>{" "}
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card p-2 py-3 text-center" id="carde">
              <div class="img mb-2">
                {" "}
                <img
                  src="https://i.imgur.com/tmdHXOY.jpg"
                  width="70"
                  class="rounded-circle"
                />{" "}
              </div>
              <h5 class="mb-0">guide3</h5> <small>location</small>
              <div class="ratings mt-2">
                {" "}
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                <i class="fa fa-star"></i>{" "}
              </div>
              <div class="mt-4 apointment">
                {" "}
                <button class="btn btn-success text-uppercase">
                  Book Appointment
                </button>{" "}
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card p-2 py-3 text-center" id="carde">
              <div class="img mb-2">
                {" "}
                <img
                  src="https://i.imgur.com/C4egmYM.jpg"
                  width="70"
                  class="rounded-circle"
                />{" "}
              </div>
              <h5 class="mb-0">guide3</h5> <small>location</small>
              <div class="ratings mt-2">
                {" "}
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
              </div>
              <div class="mt-4 apointment">
                {" "}
                <button class="btn btn-success text-uppercase">
                  Book Appointment
                </button>{" "}
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card p-2 py-3 text-center" id="carde">
              <div class="img mb-2">
                {" "}
                <img
                  src="https://i.imgur.com/0LKZQYM.jpg"
                  width="70"
                  class="rounded-circle"
                />{" "}
              </div>
              <h5 class="mb-0">guide4</h5> <small>location</small>
              <div class="ratings mt-2">
                {" "}
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
              </div>
              <div class="mt-4 apointment">
                {" "}
                <button class="btn btn-success text-uppercase">
                  Book Appointment
                </button>{" "}
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card p-2 py-3 text-center" id="carde">
              <div class="img mb-2">
                {" "}
                <img
                  src="https://i.imgur.com/ZSkeqnd.jpg"
                  width="70"
                  class="rounded-circle"
                />{" "}
              </div>
              <h5 class="mb-0">guide</h5> <small>location</small>
              <div class="ratings mt-2">
                {" "}
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
              </div>
              <div class="mt-4 apointment">
                {" "}
                <button class="btn btn-success text-uppercase">
                  Book Appointment
                </button>{" "}
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card p-2 py-3 text-center" id="carde">
              <div class="img mb-2">
                {" "}
                <img
                  src="https://i.imgur.com/MZm1LNz.jpg"
                  width="70"
                  class="rounded-circle"
                />{" "}
              </div>
              <h5 class="mb-0">guide6</h5> <small>location</small>
              <div class="ratings mt-2">
                {" "}
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
              </div>
              <div class="mt-4 apointment">
                {" "}
                <button class="btn btn-success text-uppercase">
                  Book Appointment
                </button>{" "}
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card p-2 py-3 text-center" id="carde">
              <div class="img mb-2">
                {" "}
                <img
                  src="https://i.imgur.com/HFpxxJz.jpg"
                  width="70"
                  class="rounded-circle"
                />{" "}
              </div>
              <h5 class="mb-0">guide7</h5> <small>location</small>
              <div class="ratings mt-2">
                {" "}
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
              </div>
              <div class="mt-4 apointment">
                {" "}
                <button class="btn btn-success text-uppercase">
                  Book Appointment
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
