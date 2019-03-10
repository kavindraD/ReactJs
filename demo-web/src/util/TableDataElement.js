import React, { Component } from 'react';

export default class TableDataElement extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    } 
    
    render(){
        let s = {'color': this.props.color}
        return (
            <div className="table-data-element" style={s}>
                <label>{this.props.displayTxt}</label>
            </div>
        )
    } 
}