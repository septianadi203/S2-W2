// import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import NavbarProject from "../components/NavbarProject";
import Container from "react-bootstrap/esm/Container";
import Img1 from "../images/Img1.jpg";
import Bath from "../images/bath.jpg";
import Bed from "../images/bed.jpg";
// import ImgDp2 from "../assets/img/imgpd2.png";
// import ImgDp3 from "../assets/img/imgpd3.png";
// import ImgDp4 from "../assets/img/imgpd4.png";
// import bathimg from "../assets/img/bathimg.png";
// import bedimg from "../assets/img/bedimg.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
// import listData from "../components/Data";
// import { useContext } from "react";
// import { useNavigate, useParams } from "react-router-dom";
import Navbar from '../components/Navbar';

export default function DetailProperty(props) {


  return (
    <>
      <Navbar userSignIn={props.userSignIn} setUserSignIn={props.setUserSignIn} />

      <Container style={{ margin: "200px" }} className="mx-auto px-5 mt-5 pt-5 d-flex flex-column">
        <Row>
          <Col className="mt-5">
            <div className="mb-4">
              <img className="w-100" style={{ height: "600px" }} src={Img1} alt="" />
            </div>
            <div className="mb-5">
              <Row>
                <Col>
                  <img className="w-100" src={Img1} alt="" />
                </Col>
                <Col>
                  <img className="w-100" src={Img1} alt="" />
                </Col>
                <Col>
                  <img className="w-100" src={Img1} alt="" />
                </Col>
              </Row>
            </div>
            <div className="mb-5">
              <h1 className="fw-bold">Nama Property</h1>
            </div>
            <div className="d-flex justify-content-between mb-5">
              <Col sm={4}>
                <h3 className="fw-bold">Rp.9.000.000 / Year</h3>
                <p>Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,Tangerang Selatan</p>
              </Col>
              <Col className="d-flex" sm={3}>
                <Col>
                  <p className="p-0 m-0">Bedrooms</p>
                  <div className="d-flex gap-2">
                    <span className="fw-bold">1</span>
                    <img src={Bed} alt="" />
                  </div>
                </Col>
                <Col>
                  <p className="p-0 m-0">Bathrooms</p>
                  <div className="d-flex gap-2">
                    <span className="fw-bold">1</span>
                    <img src={Bath} alt="" />
                  </div>
                </Col>
                <Col>
                  <p className="p-0 m-0">Area</p>
                  <div>
                    <span className="fw-bold">1800 Ft</span>
                  </div>
                </Col>
              </Col>
            </div>
            <div>
              <h4 className="fw-bold">Description</h4>
              <p style={{ textAlign: "justify" }}>Deskripsi</p>
            </div>
            <div className="d-flex justify-content-md-end">
              <Button className=" mt-5 px-5">Book Now</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

