import React, { Component } from 'react';

export default class WebLogo extends Component{

    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    render(){
       return (
            <div className="web-logo" >
                <img src={this.props.imgSrc}></img>
            </div>
        )
    }
}