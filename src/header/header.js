import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from  'react';
import { BrowserRouter, Link  } from 'react-router-dom';
import './../sass/_common.scss';
import './_header.scss';

function Header (){
    return (
<header className="header">
    <div className="container">
    <div className="header-inner">
        <div className="header-inner-left">
            <a className="logo" href="/home">
            <span className="logo-name">Saloni Mittal</span>
            </a>
        </div>
    <nav className='nav'>
        <ul className="nav-list">
            <li className="nav-items">
               <Link to='/'> <a className="nav-links" href="/home">
                    Home
                </a></Link>
            </li>

            <li className="nav-items">
          <Link to='/education'>  <a className="nav-links" href="/Education">
                    Education
                </a></Link>
            </li>

            <li className="nav-items">
           <Link to='/experience'> <a className="nav-links" href="/Experience">
                    Experience
                </a></Link>
            </li>

            <li className="nav-items">
            <Link to='/contact'>  <a className="nav-links" href="/ContactMe">
                    Contact Me
                </a></Link>
            </li>

        </ul>
    </nav>
    </div>
    </div>

    
</header>
    );  
}

export default Header;