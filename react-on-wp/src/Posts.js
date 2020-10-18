import React, {Component} from "react";
import {Link} from "react-router-dom";
import Header from "./Header";
import Post from "./Post"

import Grid from "@material-ui/core/Grid";

const base_url = 'http://localhost:8000/';
const posts_url = base_url +  'wp-json/wp/v2/posts/?_embed';


export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            item: [],
        };
    }

    componentDidMount() {
        fetch(posts_url, {mode: "cors"})
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    isLoading: true,
                    item: json,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <div>
                <Header/>
                <p>Posts</p>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {this.state.item.map((i) => (
                        <Post
                            title={i.title}
                            body={i.body}
                        />))}
                </Grid>
            </div>
        )
    }
}