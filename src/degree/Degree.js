import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './../sass/_common.scss';
import './_degree.scss';
import Education from './../images/Education.png';
import Logo from './../images/university-logo.png';


const Degree = () => {
    return (
        <div className="degree">
            <div className="container">
               <div className="row degree-inner">
                   <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                         <div className="col-left">
                             <img src={Education} alt="education"/>
                        </div>
                   </div>

                   <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="col-right">
                            <h2 className="title">Education</h2>
                            <h3 className="sub-title">Basic Qualification and Certificaton</h3>
                            <p className="text">I have studied basic Software Engineering subjects like Data Structure, Web Development,
                                  Algorithm, Operating System, C & Java etc.
                            </p>
                        </div>
                   </div>
               </div>

               <div className="row degree-inner">
               <h2 className="title">Degree Received</h2>
                   <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                         <div className="col-left mt3">
                             <div class="logo-inner">
                             <img src={Logo} alt="logo"/>
                             </div>
                        </div>
                   </div>

                   <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                        <div className="col-right mt3">
                          
                            <h3 className="sub-title">Basic Qualification and Certificaton</h3>
                            <p className="text">I have studied basic Software Engineering subjects like Data Structure, Web Development,
                                  Algorithm, Operating System, C & Java etc.
                            </p>
                        </div>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Degree;