import React from 'react';

const QuoteForm = () => {
    return (
        <div className="col-lg-8 wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.25s">
            <form action="#" method="post">
                <div className="row">
                    <p>¿A donde quieres Envíar?</p>
                    <div className="col-lg-4">
                        <select name="distrito" id="distrito" className="form-control">
                            <option value="1">-- Seleccionar --</option>
                            <option value="1">ABC</option>
                            <option value="1">ABC</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <select name="distrito" id="distrito" className="form-control">
                            <option value="1">-- Seleccionar --</option>
                            <option value="1">ABC</option>
                            <option value="1">ABC</option>
                        </select>
                    </div>
                    <div className="col-lg-4 mb-2">
                        <select name="distrito" id="distrito" className="form-control">
                            <option value="1">-- Seleccionar --</option>
                            <option value="1">ABC</option>
                            <option value="1">ABC</option>
                        </select>
                    </div>
                    <div className="col-lg-12 mb-2">
                        <input type="text" className="form-control" name="email" id="email" pattern="[^ @]*@[^ @]*"
                               placeholder="Your Address" required=""/>
                    </div>
                    <p>2. ¿Que quieres Envíar?</p>
                    <div className="col-lg-8 mb-2 d-flex">
                        <button type="submit" id="form-submit" className="btn btn-close-white form-control">
                            <i className="fa fa-plus"></i>Paquete
                        </button>
                        <button type="submit" id="form-submit" className="btn btn-close-white form-control">
                            <i className="fa fa-plus mr2"></i>Sobre
                        </button>
                    </div>
                    <div className="col-lg-12 mb-2">
                        <input type="text" className="form-control" name="email" id="email" pattern="[^ @]*@[^ @]*"
                               placeholder="Your Address" required=""/>
                    </div>
                    <div className="col-lg-12 mb-2">
                        <button type="button" id="form-submit" className="main-button form-control">
                            Quote
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default QuoteForm;