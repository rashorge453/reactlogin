import React from 'react'
import {Link} from "react-router-dom"
import ReactDOM from 'react-dom/client';
import SignUp from "./SignUp"
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom'
import Iframe from 'react-iframe'
function Welcome(){
   
   return <h1>Welcome Rishi!
      <Iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="640" height="480"src="https://charts.mongodb.com/charts-project-0-ihscd/embed/charts?id=6327aee5-717b-4af3-8233-ef09c202a507&maxDataAge=3600&theme=light&autoRefresh=true"/>
      </h1>
}
export default Welcome