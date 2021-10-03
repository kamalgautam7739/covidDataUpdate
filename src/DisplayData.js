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
                     {this.props.data.map((element,i)=>
                       <tr> <td>{i+1}</td>
                        <td>{element.country}</td>
                        <td>{element.cases}</td>
                        <td>{element.todayCases}</td>
                        <td  style={{backgroundColor:"red"}}>{element.deaths}</td>
                        <td  style={{backgroundColor:"red"}}>{element.todayDeaths}</td>
                        <td  style={{backgroundColor:"rgb(126, 236, 116)"}}>{element.recovered}</td>
                        <td>{element.active}</td>
                        <td>{element.critical}</td>
                        </tr>)}
                    </tbody>
                </table>
                
            </div>
        )
    }
}
