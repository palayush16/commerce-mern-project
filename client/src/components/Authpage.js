import React from 'react'
import './Authpage.css'
const axios = require('axios');


const Authpage = () => {

    function RedirectGoogleSSO(){
        const newWindow = window.open("http://localhost:5000/auth/google", "_self");
    }

    return (
        <div className="container-authpage">
            <div className="container-authpage-desc">
                <div className="desc-container">
                    {/* <h3>Ever felt tired of selling books and other accessories by spamming it on various WhatApp Groups at end of semseter ?  Here are we to help you </h3> */}
                    <h3>Bitsians buy and sell 2nd hand books and products here</h3>
                    <h5>Our website will act as DALAL</h5>
                </div>
            </div>
            <div className="container-authpage-cta">
                <div className="buttons">
                    
                    <h2>Login or Signup through BitsMail</h2>
                
                    <button className="button-cta" onClick={RedirectGoogleSSO}><h4>LOGIN</h4></button>
                    <button className="button-cta" onClick={RedirectGoogleSSO}><h4>SIGN UP</h4></button>
                </div>
            </div>
        </div>
    )
}

export default Authpage
