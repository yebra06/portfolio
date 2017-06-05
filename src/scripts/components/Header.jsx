import React from 'react';
import { Route, Link } from 'react-router-dom';

import About from '../components/About.jsx';

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="intro-card-outter">
                    <div className="intro-card">
                        <div className="intro-card-section">
                            <img className="info-card-img" src="http://via.placeholder.com/300x400"/>
                        </div>
                        <div className="intro-card-info">
                            <h1>I'm Alfredo,</h1>
                            <small className="hide-mobile-md">Student and Developer based in Austin/San Marcos</small>
                            <hr/>
                            <h4><span className="bold">Age: </span>23</h4>
                            <h4><span className="bold">University:</span> Texas State</h4>
                            <h4><span className="bold">Major:</span> Computer Science focused in Computer Engineering</h4>
                            <button>
                                <Link to="/about">Read More -></Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Route path="/about" component={ About } />
        </div>
    );
};

export default Header;
