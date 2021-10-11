import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './../sass/_common.scss';
import './_header.scss';

function MyHeader (){
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
                <a className="nav-links" href="/home">
                    Home
                </a>
            </li>

            <li className="nav-items">
            <a className="nav-links" href="/Education">
                    Education
                </a>
            </li>

            <li className="nav-items">
            <a className="nav-links" href="/Experience">
                    Experience
                </a>
            </li>

            <li className="nav-items">
            <a className="nav-links" href="/ContactMe">
                    Contact Me
                </a>
            </li>

        </ul>
    </nav>
    </div>
    </div>

    
</header>
    );  
}

ReactDOM.render(<MyHeader />, document.getElementById('Header'));