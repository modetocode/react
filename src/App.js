import React, { Component } from 'react';
import Posts from "./Posts";
import PostForm from "./PostForm";

class App extends Component {
    render() {
        return (
            <div>
                Hello world
                <Posts/>
                <PostForm/>
            </div>
        );
    }
}

export default App;