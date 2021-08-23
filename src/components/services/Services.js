import React from 'react';
import LeftImage from "../../assets/images/about-left-image.png";
import ServiceOne from "../../assets/images/service-icon-01.png";
import ServiceTwo from "../../assets/images/service-icon-02.png";
import ServiceThree from "../../assets/images/service-icon-03.png";
import ServiceFour from "../../assets/images/service-icon-04.png";


const Services = () => {
    return (
        <div id="about" className="about-us section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="left-image wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                            <img src={LeftImage} alt="person graphic"/>
                        </div>
                    </div>
                    <div className="col-lg-8 align-self-center">
                        <div className="services">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="icon">
                                            <img src={ServiceOne} alt="reporting"/>
                                        </div>
                                        <div className="right-text">
                                            <h4>Courier</h4>
                                            <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                                        <div className="icon">
                                            <img src={ServiceTwo} alt=""/>
                                        </div>
                                        <div className="right-text">
                                            <h4>Ecommerce</h4>
                                            <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                                        <div className="icon">
                                            <img src={ServiceThree} alt=""/>
                                        </div>
                                        <div className="right-text">
                                            <h4>Tracking</h4>
                                            <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item wow fadeIn" data-wow-duration="1s" data-wow-delay="1.1s">
                                        <div className="icon">
                                            <img src={ServiceFour} alt=""/>
                                        </div>
                                        <div className="right-text">
                                            <h4>Multi Platform</h4>
                                            <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;