import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";


export default class Post extends Component {
    constructor(props) {
        super(props);
        this.setState({
            title: props.title,
            body: props.body,
        });
    }

    render() {
        return(
            <div>
                <Grid>{this.props.title}</Grid>
            </div>
        )
    }
}