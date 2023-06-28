import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../utilities/googleAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import logo from "../images/ieee-logo-light.png";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  // const [signed_in, setSigned_in] = useState(false);
  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setSigned_in(true);
  //   } else {
  //     setSigned_in(false);
  //   }
  // });

  // let navigate = useNavigate();
  // const redirect = () => {
  //   let path = localStorage.getItem("Submitted") === "1" ? "/success" : "/reg";
  //   navigate(path);
  // };

  return (
    <>
      <section id="home">
        <nav class="navbar">
          <div class="container">
            <a class="navbar-brand" href="https://www.ieeesbnitdgp.com/">
              <img src={logo} alt="" width="100" height="50" />
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row head">
                <h1>
                  IEEE SB NIT DURGAPUR
                  <br />
                  AUDITIONS
                </h1>
              </div>
              <div className="desc">
                <p>
                  IEEE is the world's largest professional association dedicated
                  to advancing technological innovation and excellence for the
                  benefit of humanity.
                  <a
                    href="https://www.ieee.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Learn more
                  </a>
                  <br />
                  <br />
                  The IEEE Student Branch , NIT Durgapur is a society of
                  enthusiasts aimed at promoting research-related activities in
                  the campus.
                  <a
                    href="https://www.ieeesbnitdgp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Learn more
                  </a>
                </p>
              </div>
              <div className="stat-box">
                <div className="d-flex">
                  <div className="stat">
                    <p>50+ Members</p>
                  </div>
                  <div className="stat">
                    <p>30+ Events</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="stat">
                    <p>500+ Registrations</p>
                  </div>
                </div>
              </div>
            {/* {signed_in ? ( */}
               {/* // redirect()):
//                 <button>
//                   <Link
//                     to={
//                       localStorage.getItem("Submitted") === "1"
//                         ? "/success"
//                         : "/reg"
//                     }
//                   >
//                     Register
//                   </Link>
//                 </button>
              (
              
                  Register
                </button>
              )} 
              {/* <div className="mt-2 p-3 ">
								<h3>Audition registration has been closed!</h3>
							</div> */}
                <button
                  

                >
                  <Link to='/reg'>register</Link>
                  </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
