import React from "react";
import "./Homecont7.css";
import Kola from "../../assets/Ellipse 54.png";
import Sarah from "../../assets/Ellipse 52.png";
import Tobi from "../../assets/Ellipse 53.png";
import Leftarrow from "../../assets/Vector (19).png";
import Rightarrow from "../../assets/Vector (17).png";
import Mark from "../../assets/Vector (11).png";

const Homecont7 = () => {
  return (
    <div>
      <div className="Homecont7">
        <div className="testimonial-title">
          <img src={Leftarrow} alt="img" className="Left" />
          <h2>See what others have to say</h2>
          <img src={Rightarrow} alt="img" className="Right" />
        </div>
        <div className="testimonial-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        <section className="personalTm">
          <div className="card-cont7">
            <div className="slanted"></div>
            <div className="kola">
              <img src={Kola} alt="img" className="profilePic" />
              <h5>Kolawole Tobi </h5>
              <img
                src={Mark}
                alt="img"
                className="qout"
                style={{ width: 16.4, height: 14.26 }}
              />
              <p>
                {" "}
                Ultricies quis commodo ac at sed at sagittis risus ultrices. A
                rhoncus in adipiscing malesua.
              </p>
            </div>
          </div>
          <div className="card-cont7">
            <div className="slanted"></div>
            <div className="kola">
              <img src={Sarah} alt="img" className="profilePic" />
              <h5>Kolawole Tobi </h5>
              <img
                src={Mark}
                alt="img"
                className="qout"
                style={{ width: 16.4, height: 14.26 }}
              />
              <p>
                {" "}
                Ultricies quis commodo ac at sed at sagittis risus ultrices. A
                rhoncus in adipiscing malesua.
              </p>
            </div>
          </div>
          <div className="card-cont7">
            <div className="slanted"></div>
            <div className="kola">
              <img src={Tobi} alt="img" className="profilePic" />
              <h5>Kolawole Tobi </h5>
              <img
                src={Mark}
                alt="img"
                className="qout"
                style={{ width: 16.4, height: 14.26 }}
              />
              <p>
                {" "}
                Ultricies quis commodo ac at sed at sagittis risus ultrices. A
                rhoncus in adipiscing malesua.
              </p>
            </div>
          </div>
 

        </section>
      </div>
    </div>
  );
};

export default Homecont7;
