import React, {useState} from 'react';
import '../../assets/css/style.css'
import LoginImagen from '../../assets/images/log.svg';
import RegisterImagen from '../../assets/images/register.svg';
import LoginForm from "../../components/login/LoginForm";
import RegisterForm from "../../components/register/RegisterForm";

const LoginRegister = () => {

    const [view, setView] = useState('login');
    const [classChange, setClasssChange] = useState('container');

    function changeViewRegistro() {
        if (view === 'login') {
            setView('register');
            setClasssChange('container sign-up-mode')
        } else {
            setView('login');
            setClasssChange('container')
        }
    }

    return (
        <div className={classChange}>
            <div className="forms-container">
                <div className="signin-signup">
                    <LoginForm/>
                    <RegisterForm/>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button className="btn transparent" id="sign-up-btn" onClick={changeViewRegistro}>
                            Sign up
                        </button>
                    </div>
                    <img src={LoginImagen} className="image" alt=""/>
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button className="btn transparent" id="sign-in-btn" onClick={changeViewRegistro}>
                            Sign in
                        </button>
                    </div>
                    <img src={RegisterImagen} className="image" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;
