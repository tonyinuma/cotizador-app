import React from 'react';
import QuoteForm from "../components/quote/QuoteForm";

const QuoteLayout = () => {
    return (
        <div id="contact" className="contact-us section">
            <div className="container">
                <div className="row">
                    <QuoteForm/>
                    <div className="col-lg-4 align-self-center wow fadeInLeft" data-wow-duration="0.5s"
                         data-wow-delay="0.25s">
                        <div className="section-heading">
                            <h2>Calculate your Shipment</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doer ket eismod tempor
                                incididunt ut labore et dolores</p>
                            <div className="phone-info">
                                <h4>Call Us:
                                    <span>
                                        <i className="fa fa-phone"></i>
                                        <a href="#">+51 958956589</a>
                                    </span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteLayout;