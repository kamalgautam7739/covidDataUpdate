import axios from "axios";
import React, { Component } from "react";
import DisplayData from "./DisplayData";

export default class NewComponent extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = { data:[],
  //     condition:true };
  //   }

  state = {
    data: [],
    duplicateData:[],
    condition: true,
    error: false,
  };

  //for search field change
  searchFunction=(e)=>{
      let temp = this.state.data.filter ( (elem)=>{
         
          let l = elem.country.toLowerCase()
          let c = e.target.value.toLowerCase()
        //   if(l.includes(c)){
        //   console.log(c)}
        //   return 1;})
          return l.includes(c)})
          
    //   return (elem.country.toLowercase().indexOf(e.target.value.toLowercase()) !== -1)})
    this.setState({duplicateData:temp})
  }

  apiCall() {
    let self = this;
    axios
      .get(`https://coronavirus-19-api.herokuapp.com/countries`)
      .then(function (response) {
        self.setState({ data: response.data, condition: false,duplicateData:response.data });
      })
      .catch(function (error) {
        self.setState({ error: true });
      });
  }

  componentDidMount() {
    this.apiCall();
  }

  //  async componentDidMount() {

  //     const response = await fetch(`https://coronavirus-19-api.herokuapp.com/countries`);

  //     const json = await response.json();

  //     this.setState({ data: json,
  //         condition:false
  //     });
  // }

  render() {
    return (
        <div>
        <div  style={{width:"80vw", margin:"auto"}}>
            <label htmlFor="search">Search </label>
            <input type="text" onChange={this.searchFunction}/>
        </div>
      <div>
        {this.state.error ? (
             <div  style={{width:"80vw", margin:"auto"}}> Something Went Wrong !!! Please try again later</div>
          
        ) : this.state.condition ? (
            <div  style={{width:"80vw", margin:"auto"}}>Loading Data. please Wait...</div>
        ) : (
          <div>
            <DisplayData data={this.state.duplicateData}></DisplayData>
          </div>
        )}
      </div>
      </div>
    );
    
  }
 
}
