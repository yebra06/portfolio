import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Nav from '../components/Nav.jsx';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav/>
                </div>
            </Router>
        );
    }
}
