import React from 'react';
import PropTypes from 'prop-types';

Navbar.propTypes = {
    heading: PropTypes.string
};
Navbar.defaultProps = {
    heading : "Heading"
}

function Navbar(props) {
    return (
        <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <a className="navbar-brand" href="#">{props.heading}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Preview</a>
                    </li>
                    </ul>
                </div>
                <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
                    <input className="form-check-input" onChange={props.toogle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" for="flexSwitchCheckDefault">Darkmode Enable</label>
                </div>
                </nav>
        </div>
    );
}

export default Navbar;