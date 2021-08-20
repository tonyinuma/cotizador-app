import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "../pages/Home/Home";
import LoginRegister from "../pages/LoginRegister/LoginRegister";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <LoginRegister />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;