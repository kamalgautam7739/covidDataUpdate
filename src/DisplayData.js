import React, { Component } from 'react'
import "../src/DisplayData.css"
export default class DisplayData extends Component {
    render() {
        return (
            <div>
                <table style={{width:"80vw", margin:"auto"}}>
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Country</th>
                        <th>Cases</th>
                        <th>Today Cases</th>
                        <th>Deaths</th>
                        <th>Today Deaths</th>
                        <th>Recovered</th>
                        <th>Active</th>
                        <th>critical</th>
                    </tr>
                </thead>
                    <tbody>
                    <tr>
                       <td> {this.props.data.map((element,i)=>
                        <div>
                        {i+1}
                        </div>)}</td>
                        <td>
                        {this.props.data.map((element,i)=>
                        <div>
                           {element.country?element.country:"-"}</div>
                        )}</td>
                        <td>
                        {this.props.data.map((element,i)=>
                        <div>
                           {element.cases?element.cases:"-"}</div>
                        )}</td>
                        <td>
                        {this.props.data.map((element,i)=>
                        <div>
                           {element.todayCases?element.todayCases:"-"}</div>
                        )}</td>
                        <td style={{color:"red"}}>
                        {this.props.data.map((element,i)=>
                        <div>
                           {element.deaths?element.deaths:"-"}</div>
                        )}</td>
                        <td style={{color:"red"}}>
                        {this.props.data.map((element,i)=>
                        <div>
                           {element.todayDeaths?element.todayDeaths:"-"}</div>
                        )}</td>
                        <td style={{color:"rgb(32, 253, 2)"}}>
                        {this.props.data.map((element,i)=>
                        <div>
                           {element.recovered?element.recovered:"-"}</div>
                        )}</td>
                        <td>
                        {this.props.data.map((element,i)=>
                        <div>
                           {element.active?element.active:"-"}</div>
                        )}</td>
                        <td>
                        {this.props.data.map((element,i)=>
                        <div>
                           {element.critical?element.critical:"-"}</div>
                        )}</td>
                    </tr>
                    </tbody>
                </table>
                
            </div>
        )
    }
}
