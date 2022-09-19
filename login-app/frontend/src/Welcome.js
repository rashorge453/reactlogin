import React from 'react'
import {Link} from "react-router-dom"
import ReactDOM from 'react-dom/client';
import SignUp from "./SignUp"
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom'
import Iframe from 'react-iframe'
function Welcome(){
   
   return <h1>Welcome!
      <Iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480" src="https://charts.mongodb.com/charts-project-0-ihscd/embed/charts?id=632881a5-7e44-468a-8a6d-fa65c5c66be6&maxDataAge=3600&theme=light&autoRefresh=true"/>
      </h1>
}
export default Welcome