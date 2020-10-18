import React, {Component} from "react";
import {Link} from "react-router-dom";


export default class Header extends Component {
    render() {
        return(
            <header>
                <div>
                    <h1>This is Title.</h1>
                    <ul>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/posts'>POSTS</Link></li>
                    </ul>
                </div>
            </header>
        );
    }
}