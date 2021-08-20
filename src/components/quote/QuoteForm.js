import React from 'react';

const QuoteForm = () => {
    return (
        <div className="col-lg-6 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
            <form  action="#" method="post">
                <div className="row">
                    <div className="col-lg-6">
                        <fieldset>
                            <input type="name" name="name" id="name" placeholder="Name" autoComplete="on"
                                   required/>
                        </fieldset>
                    </div>
                    <div className="col-lg-6">
                        <fieldset>
                            <input type="surname" name="surname" id="surname" placeholder="Surname"
                                   autoComplete="on" required/>
                        </fieldset>
                    </div>
                    <div className="col-lg-12">
                        <fieldset>
                            <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*"
                                   placeholder="Your Email" required=""/>
                        </fieldset>
                    </div>
                    <div className="col-lg-12">
                        <fieldset>
                                        <textarea name="message" type="text" className="form-control" id="message"
                                                  placeholder="Message" required=""></textarea>
                        </fieldset>
                    </div>
                    <div className="col-lg-12">
                        <fieldset>
                            <button type="submit" id="form-submit" className="main-button ">Send Message
                            </button>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default QuoteForm;