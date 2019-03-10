import React, { Component } from 'react';
import WebHeader from '../component/WebHeader';
import WebFooter from '../component/WebFooter';
import TableHeaderElement from '../util/TableHeaderElement';

import timg1 from '../assets/timg1.png';
import timg2 from '../assets/timg2.png';
import timg3 from '../assets/timg3.png';
import timg4 from '../assets/timg4.png';
import timg5 from '../assets/timg5.png';
import timg6 from '../assets/timg6.png';
import TableDataElement from '../util/TableDataElement';

export default class StartScreen extends Component{
    constructor(props){
    super(props);
       this.state = {
        
        };
    }

    componentWillReceiveProps(nextProps){
       
    }

    render(){
        const Blue = '#257ACD';
        const Grey = '#676767';
        const Voilet = '#514597';
        const Orange = '#E9591C';
        const Red = '#CE2E84';
        const Green = '#2FAC68';
        return (
            <div className="web-start">
                <WebHeader></WebHeader>
                <div className="start-screen">
                    <table>
                        <thead>
                            <tr>
                                <th><TableHeaderElement color={Grey} imgSrc={timg6} displayTxt='Facilities' ></TableHeaderElement></th>
                                <th><TableHeaderElement color={Blue} imgSrc={timg1} displayTxt='Individual' ></TableHeaderElement></th>
                                <th><TableHeaderElement color={Voilet} imgSrc={timg2} displayTxt='Club' ></TableHeaderElement></th>
                                <th><TableHeaderElement color={Orange} imgSrc={timg3} displayTxt='Companies' ></TableHeaderElement></th>
                                <th><TableHeaderElement color={Red} imgSrc={timg4} displayTxt='Cities' ></TableHeaderElement></th>
                                <th><TableHeaderElement color={Green} imgSrc={timg5} displayTxt='Venus' ></TableHeaderElement></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td><TableDataElement color={Grey} displayTxt='Member manage'></TableDataElement></td>
                                <td><TableDataElement color={Blue} displayTxt='Unlimited'></TableDataElement></td>
                                <td><TableDataElement color={Voilet} displayTxt='test1'></TableDataElement></td>
                                <td><TableDataElement color={Orange} displayTxt='testdata'></TableDataElement></td>
                                <td><TableDataElement color={Red} displayTxt='test'></TableDataElement></td>
                                <td><TableDataElement color={Green} displayTxt='test'></TableDataElement></td>
                            </tr>
                            <tr>
                                <td><TableDataElement color={Grey} displayTxt='Member manage'></TableDataElement></td>
                                <td><TableDataElement color={Blue} displayTxt='Free'></TableDataElement></td>
                                <td><TableDataElement color={Voilet} displayTxt='test1'></TableDataElement></td>
                                <td><TableDataElement color={Orange} displayTxt='testdata'></TableDataElement></td>
                                <td><TableDataElement color={Red} displayTxt='test'></TableDataElement></td>
                                <td><TableDataElement color={Green} displayTxt='test'></TableDataElement></td>
                            </tr>
                            <tr>
                                <td><TableDataElement color={Grey} displayTxt='Member manage'></TableDataElement></td>
                                <td><TableDataElement color={Blue} displayTxt='Unlimited'></TableDataElement></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td><TableDataElement color={Voilet} displayTxt='test1'></TableDataElement></td>
                                <td><TableDataElement color={Orange} displayTxt='testdata'></TableDataElement></td>
                                <td><TableDataElement color={Red} displayTxt='test'></TableDataElement></td>
                                <td><TableDataElement color={Green} displayTxt='test'></TableDataElement></td>
                            </tr>
                            <tr>
                                <td><TableDataElement color={Grey} displayTxt='Member manage'></TableDataElement></td>
                                <td><TableDataElement color={Blue} displayTxt='Free'></TableDataElement></td>
                                <td><TableDataElement color={Voilet} displayTxt='test1'></TableDataElement></td>
                                <td><TableDataElement color={Orange} displayTxt='testdata'></TableDataElement></td>
                                <td><TableDataElement color={Red} displayTxt='test'></TableDataElement></td>
                                <td><TableDataElement color={Green} displayTxt='test'></TableDataElement></td>
                            </tr>
                            
                        </tbody>
                        
                    </table>
                </div>
                <WebFooter></WebFooter>
            </div>
        );
    }

}