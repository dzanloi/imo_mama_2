import React, {Component} from "react";
import { render} from "react-dom";
//import components here to render
import LandingPage from "./LandingPage";


export default class App extends Component{

    constructor(props){
        super(props);

    }
    render(){
        return  <div>
        <LandingPage />
      </div>
    }
}
const appDiv=document.getElementById("app");
render(<App/>,appDiv);