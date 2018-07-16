import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { posts: state.posts };
}

class PostsCom extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                {this.props.posts.map((n) =>
                    <SinglePost title={n.title} body={n.body} />
                )};
            </ul>
        );
    }
}

class SinglePost extends Component {
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

const Posts = connect(mapStateToProps)(PostsCom);
export default Posts;