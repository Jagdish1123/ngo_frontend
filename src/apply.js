// eslint-disable-next-line no-unused-vars
import React from "react";
import './apply.css'
import Footer from "./footer";


// images
import teamMemb1 from './assets/images/team/education.jpg';
import teamMemb2 from './assets/images/team/health.jpg';
import teamMemb3 from './assets/images/team/sports.jpg';
// import teamMemb4 from './assets/images/team/9Ishanya.jpg';
const Apply = () => {
  return (

    <div>
      <div className="cards">
        <div className="card1">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={teamMemb1} alt="" />
                <p className="item1">Book For Purpose</p>
              </div>
              <div className="flip-card-back">
                <p className="title">Details</p>
                <p>
                  Provide educational resources to underprivileged children.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="card2">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={teamMemb2} alt="" />
                <p className="item2">Aayushmaan Aadhar Mobile Ambulance Initiative</p>
              </div>
              <div className="flip-card-back">
                <p className="title">Details</p>
                <p>Deliver accessible healthcare services to rural and underserved communities.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card3">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={teamMemb3} alt="" />
                <p className="item1">Y4D Sports for Development</p>
              </div>
              <div className="flip-card-back">
                <p className="title">Description</p>
                <p>Promote physical fitness, teamwork, and discipline among youth.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card1">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={teamMemb1} alt="" />
                <p className="item1">Emergency Medical Help</p>
              </div>
              <div className="flip-card-back">
                <p className="title">Details</p>
                <p>
                  Provide educational resources to underprivileged children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards">

        <div className="card1">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={teamMemb1} alt="" />
                <p className="item1">Social Awareness Programs</p>
              </div>
              <div className="flip-card-back">
                <p className="title">Details</p>
                <p>
                  Provide educational resources to underprivileged children.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="card2">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={teamMemb2} alt="" />
                <p className="item2">Blood Donation Drive</p>
              </div>
              <div className="flip-card-back">
                <p className="title">Description</p>
                <p>Deliver accessible healthcare services to rural and underserved communities.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card3">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={teamMemb3} alt="" />
                <p className="item1">Y4D Sports for Development</p>
              </div>
              <div className="flip-card-back">
                <p className="title">Description</p>
                <p>Promote physical fitness, teamwork, and discipline among youth.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card1">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={teamMemb1} alt="" />
                <p className="item1">Child Empowerment</p>
              </div>
              <div className="flip-card-back">
                <p className="title">Description</p>
                <p>
                  Provide educational resources to underprivileged children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Apply;
