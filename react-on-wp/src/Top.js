import React, {Component} from "react";
import Header from "./Header";
import { Button } from '@material-ui/core';

export default class Index extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div>
                    <Button color="primary">Hello World.</Button>
                </div>
            </div>
        );
    }
}