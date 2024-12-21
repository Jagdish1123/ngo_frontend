import React from "react";
// css
import './assets/css/bootstrap.min.css';
import './assets/css/all.min.css';
import './assets/css/animate.css';
import './assets/plugins/slider/css/owl.carousel.min.css';
import './assets/plugins/slider/css/owl.theme.default.css';
import './assets/css/style.css';
//images
import teamMemb1 from './assets/images/team/image.png';
import teamMemb2 from './assets/images/team/12elica.jpg';
import teamMemb3 from './assets/images/team/Demech.jpg';
import teamMemb4 from './assets/images/team/9Ishanya.jpg';
const Team = () => {
  return (
    <section className="our-team team-11">
      <div className="container">
        <div className="session-title row">
          <h2>Our Partners</h2>
        </div>
        <div className="row team-row">
          <div className="col-md-3 col-sm-6">
            <div className="single-usr">
              <img src={teamMemb1} alt="David Kanuel" />
              <div className="det-o">
                <h4>MasterCard</h4>

              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-usr">
              <img src={teamMemb2} alt="David Kanuel" />
              <div className="det-o">
                <h4>Elica</h4>

              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-usr">
              <img src={teamMemb3} alt="David Kanuel" />
              <div className="det-o">
                <h4>Demech</h4>

              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-usr">
              <img src={teamMemb4} alt="David Kanuel" />
              <div className="det-o">
                <h4>Ishanya Foundation</h4>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;  