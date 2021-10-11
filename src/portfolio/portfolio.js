import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './../sass/_common.scss';
import './_portfolio.scss';
import greetingImg from './../images/greeting-img.jpg';

function Portfolio(){
    return(
      <section className="portfolio">
          <div className="container">
              <div className="portfolio-inner">
                  <div div className="greeting row">
                      <div className="greeting-text col-lg-6 col-sm-12 col-xs-12">
                         <h1 className="title">Saloni Mittal</h1>
                         <p className="subtitle">A passionate individual who always thrives to work on end 
                             to end products which develop sustainable and scalable social and 
                             technical systems to create impact.</p>
                             <div className="social-media">


                                 <a className="icon-btn" target="_blank" href="https://github.com/Salonimittal011/">
                                <span className="github">
                                 <i class="fa fa-github"></i>
                                 </span>
                                 </a>
                                 <a className="icon-btn" target="_blank" href="https://www.linkedin.com/in/saloni-mittal-89a847197/">
                                 <span className="linkedin">
                                 <i class="fa fa-linkedin"></i>
                                 </span>
                                 </a>
                                 <a className="icon-btn" target="_blank" href="salonimittal211@gmail.com">
                                 <span className="google">
                                 <i class="fa fa-google"></i>
                                 </span>
                                 </a>
                                 <a className="icon-btn" target="_blank" href="https://www.instagram.com/saloni7701/">
                                 <span className="instagram">
                                 <i class="fa fa-instagram"></i>
                                 </span>
                                 </a>
                                 <a className="icon-btn" target="_blank" href="https://www.facebook.com/saloni.mittal11">
                                 <span className="facebook">
                                 <i class="fa fa-facebook"></i>
                                 </span>
                                 </a>
                             </div>
                             <div className="portfolio-btn">
                                 <a className="btn" href="" target="_blank">⭐ Star Me On GIthub</a>
                             </div>
                      </div>
                      <div className="greeting-image col-lg-6 col-sm-12 col-xs-12">
                          <img className="" alt="greeting-img" src={greetingImg}></img>
                      </div>
                  </div>
               </div>   
          </div>
      </section>
    );
}

ReactDOM.render(<Portfolio />, document.getElementById('Portfolio'));