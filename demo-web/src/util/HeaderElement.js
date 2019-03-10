import React, { Component } from 'react';

export default class HeaderElement extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    } 
    
    render(){
        return (
            <div className="web-header-element">
                <div>
                    <img src={this.props.imgSrc} ></img>
                </div>
                <label>{this.props.displayTxt}</label>
            </div>
        )
    } 
}