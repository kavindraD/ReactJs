import React, { Component } from 'react';

export default class TableHeaderElement extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    } 
    
    render(){
        let s = {'background-color':this.props.color, 'color':'white'};
        return (
            
            <div className="table-header-element" style={s}>
                <div>
                    <img src={this.props.imgSrc} ></img>
                </div>
                <label>{this.props.displayTxt}</label>
            </div>
        )
    } 
}