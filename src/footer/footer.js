import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import './../sass/_common.scss';
import './_footer.scss';

function Footer(){
    return(
      <footer className="footer">
          <div className="container">
              <p className="footer-text">Made with ❤️ by Saloni Mittal</p>
          </div>
      </footer>
    );
}

export default Footer;