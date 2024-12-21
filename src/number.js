import React from "react";

const Number = ({ achievements }) => {
  return (
    <div className="doctor-message">
      <div className="inner-lay">
        <div className="container">
          <div className="row session-title">
            <h2>Our Achievements in Numbers</h2>
            <p>
              We can talk for a long time about the advantages of our Dental clinic before other medical treatment facilities.
              But you can read the following facts to make sure of all the pluses of our clinic:
            </p>
          </div>
          <div className="row">
            {achievements.map((item, index) => (
              <div key={index} className="col-sm-3 numb">
                <h3>{item.number}</h3>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Number;
