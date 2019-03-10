import React, { Component } from 'react';
import WebLogo from '../util/WebLogo';
import HeaderElement from '../util/HeaderElement';

import logo from '../assets/logo.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';

export default class WebHeader extends Component{

    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render(){
        return (
            <div className="web-header">
                <div className="web-header-left">
                    <WebLogo align='left' imgSrc={logo}></WebLogo>
                    <HeaderElement imgSrc={img1} displayTxt="Organize"></HeaderElement>
                    <HeaderElement imgSrc={img2} displayTxt="My Activities"></HeaderElement>
                    <HeaderElement imgSrc={img3} displayTxt="My Community"></HeaderElement>
                    
                </div>
                <div className="web-header-right">
                    <WebLogo imgSrc={img4} ></WebLogo>
                    <WebLogo imgSrc={img5} ></WebLogo>
                    <WebLogo imgSrc={img6} ></WebLogo>
                    <WebLogo imgSrc={img7} ></WebLogo>
                </div>
            </div>
        )
    }
    
}