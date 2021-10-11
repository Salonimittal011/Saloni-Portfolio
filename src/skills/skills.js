import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import FrontendImg from './../images/front-end.svg';
import Html5 from './../images/html5.svg';
import Css3 from './../images/css3.svg';
import Sass from './../images/sass.svg';
import Bootstrap from './../images/bootstrap.svg';
import jQuery from './../images/jquery.svg';
import JavaScript from './../images/javascript.svg';
import ReactImg from './../images/react.svg';
import Npm from './../images/npm.svg';
import Photoshop from './../images/photoshop.svg';
import Illustrator from './../images/illustrator.svg';
import Sketch from './../images/sketch.svg';
import './../sass/_common.scss';
import './_skills.scss';


function Skills(){
    return(
    <section className="skills">
        <div className="container">
            <div className="row">
               <h1 className="skills-header">
                   What I Do?
               </h1>

               <div className="col-lg-6 col-sm-12">
                   <div className="skills-img">
                       <img src={FrontendImg} alt="frontend-img" className="img" /> 
                   </div>
               </div>

               <div className="col-lg-6 col-sm-12">
                 <div className="skills-details">
                     <h2 className="skills-title">
                         Front End Development
                     </h2>
                     <div className="software-skills">
                    
                        <a className="dev-icons" href="">
                            
                         <img src={Html5} alt="frontend-img" className="img" /> 
                         </a>
                         <a className="dev-icons" href="">
                         <img src={Css3} alt="frontend-img" className="img" /> 
                         </a>
                     
                         <a className="dev-icons" href="">
                         <img src={Sass} alt="frontend-img" className="img" /> 
                         </a>
                      
                         <a className="dev-icons" href="">
                         <img src={Bootstrap} alt="frontend-img" className="img" /> 
                         </a>
                       
                         <a className="dev-icons" href="">
                         <img src={jQuery} alt="frontend-img" className="img" /> 
                         </a>
                      
                         <a className="dev-icons" href="">
                         <img src={JavaScript} alt="frontend-img" className="img" /> 
                         </a>
                       
                         <a className="dev-icons">
                         <img src={ReactImg} alt="frontend-img" className="img" /> 
                         </a>
                       
                         <a className="dev-icons" href="">
                         <img src={Npm} alt="frontend-img" className="img" /> 
                         </a>
                     </div>
                     

                     <p className="skills-subtitle">⚡ Building resposive website front end using React</p>
                     <p className="skills-subtitle">⚡ Developing highly attractive user interface for mobile and web applications</p>
                     </div>
               </div>
           
           
               <div className="col-lg-6 col-sm-12">
               <div className="skills-details">
                     <h2 className="skills-title">
                         UI/UX Design
                     </h2>
                     <div className="software-skills">
                   
                        <a className="dev-icons" href="">
                            
                         <img src={Photoshop} alt="photoshop" className="img" /> 
                         </a>

                         <a className="dev-icons" href="">
                            
                            <img src={Illustrator} alt="illustrator" className="img" /> 
                            </a>
                            <a className="dev-icons" href="">
                            
                            <img src={Sketch} alt="sketch" className="img" /> 
                            </a>
                    </div>
                     

                    <p className="skills-subtitle">⚡ Designing highly attractive user interface for mobile and web applications</p>
                     <p className="skills-subtitle">⚡ Customizing logo designs and building logos</p>
             
                    </div>
                   </div> 
                <div className="col-lg-6 col-sm-12">
                <div className="skills-img">
                       <img src={FrontendImg} alt="frontend-img" className="img" /> 
                   </div>
                    </div>
            </div>
     
     
        </div>
    </section>
    
    );
}

export default Skills;