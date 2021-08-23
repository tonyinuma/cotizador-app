import React from 'react';
import '../../assets/css/animated.css'
import '../../assets/css/fontawesome.css'
import '../../assets/css/templatemo-space-dynamic.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import QuoteLayout from "../../layouts/QuoteLayout";
import Services from "../../components/services/Services";

const Home = () => {
    return (
        <>
            <Header/>
            <QuoteLayout/>
            <Services/>
            <Footer/>
        </>
    );
};

export default Home;