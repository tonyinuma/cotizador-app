import React from 'react';

const Header = () => {
    return (
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <a href="/" className="logo">
                                    <h4><span>AF</span></h4>
                                </a>
                                <ul className="nav">
                                    <li className="scroll-to-section"><a href="#about">Services</a></li>
                                    <li className="scroll-to-section">
                                        <div className="main-red-button"><a href="/login">Sign In</a></div>
                                    </li>
                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
    );
};

export default Header;