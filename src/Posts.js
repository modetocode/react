import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "./actions/posts";
import simpleHOC from './hoc/simpleHOC';

const mapStateToProps = state => {
    // console.log("Stejto" + JSON.stringify(state));
    return {
        posts: state.posts
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
    }
}

class PostsCom extends Component {
    componentDidMount() {
        this.props.fetchPosts();
        // this.props.dispatch(fetchPosts());
    }

    constructor(props) {
        super(props)
    }

    render() {
        const { posts } = this.props;
        // console.log("Render");
        // console.log(posts);
        return (
            <ul>
                {

                    this.props.posts.map((n) =>
                        <SinglePost title={n.title} body={n.body} />
                    )};
            </ul>
        );
    }
}

class SinglePostCom extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.body} </p>
            </div>
        );
    }
}

const SinglePost = simpleHOC(SinglePostCom);
const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsCom);
export default Posts;