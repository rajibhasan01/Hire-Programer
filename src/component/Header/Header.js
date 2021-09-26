import React from 'react';
import './Header.css';
import logo from './logo.png'

const Header = () => {
    return (
        <>
            <div className="mt-3 d-flex justify-content-center">
                <h1 className="fw-bold text-center text-light">Programmer</h1>
                <img src={logo} alt="" className="logo" />
            </div>
            <div className="container text-center text-white mt-3">
                <h3>Hire the best software developers</h3>
                <p>Looking for Professional developer! Best in Industry. Are you a Working Professional who is interested in working in USA.</p>
                <h3>Total Budget <span className="text-danger fw-bold">10 Million</span></h3>

            </div>
        </>
    );
};

export default Header;