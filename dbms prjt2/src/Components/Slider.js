import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import './Slider.css';

export default function Slider(props) {
  return (
    <>
    <div style={{marginTop: "70px"}}>
        <Carousel fade="true" width="400px" variant={props.mode}>
  <Carousel.Item interval={3000}>
    <Link to="/place1"><img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1641933002719-4c878c83f48e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="First slide"
    /></Link>
    <Carousel.Caption className='carouselContent'>
      <h3>Shimla</h3>
      <p>Live with no excuses and travel with no regrets.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
  <Link to="/place2"><img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
      alt="Second slide"
    /></Link>
    <Carousel.Caption className='carouselContent'>
      <h3 style={{color: "white"}}>Goa</h3>
      <p style={{color: "white"}}>We travel not to escape life but for life not to escape us.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
  <Link to="/place3"><img
      className="d-block w-100"
      src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Ooty-In-Summer-cover_17th-Jan.jpg"
      alt="Third slide"
    /></Link>
    <Carousel.Caption className='carouselContent'>
      <h3 style={{color: "white"}}>Ooty</h3>
      <p style={{color: "white"}}>Life is either a daring adventure or nothing at all.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
    <Link to="/place4"><img
      className="d-block w-100"
      src="https://scoutmytrip.com/wp-content/uploads/2018/05/Lakes-in-Ladakh-Featured-1024x1024.jpg"
      alt="Third slide"
    /></Link>
    <Carousel.Caption className='carouselContent'>
      <h3 style={{color: "black"}}>Ladakh</h3>
      <p style={{color: "black"}}>Traveling – it leaves you speechless, then turns you into a storyteller.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={3000}>
    <Link to="/place5"><img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1577089907583-991f1ba4a03c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="Third slide"
    /></Link>
    <Carousel.Caption className='carouselContent'>
      <h3 style={{color: "white"}}>Jaisalmer</h3>
      <p style={{color: "white"}}>Stop worrying about the potholes in the road and enjoy the journey</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
    </div>
    </>
  );
}
