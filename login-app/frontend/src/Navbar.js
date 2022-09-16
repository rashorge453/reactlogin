import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <div>
            <ul>
                <Link to="/signup">
                    <li>SignUp</li>
                </Link>
                <Link to="/">
                    <li>SignIn</li>
                </Link>
                
            </ul>
        </div>
    )
}