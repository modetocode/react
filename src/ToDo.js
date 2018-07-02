import React, { Component } from 'react';

class ToDo extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                { content: "todo 1", id: "1" },
                { content: "todo 2", id: "2" },
                { content: "todo 3", id: "3" },
                { content: "todo 4", id: "4" },
            ],
            lastContent: "",
            nextId: 5
        }

        this.addToList = this.addToList.bind(this);
        this.removeFromList = this.removeFromList.bind(this);
        this.changeLastToDoHandler = this.changeLastToDoHandler.bind(this);
    }


    addToList() {
        let todo = {};
        todo["content"] = this.state.lastContent;
        todo["id"] = parseInt(this.state.nextId) + 1;
        console.log(this.state.nextId);
        let todos = this.state.todos;
        let state = {};
        todos.push(todo);
        state["todos"] = todos;
        state["nextId"] = this.state.nextId + 1;
        // console.log(todos);
        this.setState(state);
    }

    removeFromList(e) {
        let newTodos = this.state.todos.filter(x => x.id != e.target.name);
        // let newTodos = [];
        // for (var i = 0; i < this.state.todos.length; i++) {
        //     if (this.state.todos[i].id != e.target.name) {
        //         newTodos.push(this.state.todos[i]);
        //     }
        // }

        let state = {};
        state["todos"] = newTodos;
        this.setState(state);
    }
    changeLastToDoHandler(e) {
        let state = {};
        state["lastContent"] = e.target.value;
        this.setState(state)
    }

    render() {
        return (
            <div>
                <ToDoForm changeLastToDoHandler={this.changeLastToDoHandler} addToList={this.addToList} />
                <ToDoList todos={this.state.todos} removeFromList={this.removeFromList} />
            </div>
        );
    }


    //componentWillMount - komponentata sega kje starta
    //componentDidMount - komponentata e vekje izrenderirana (za ajax povici)
    //shouldComponentUpdate - sekogas koga del od komponentata kje bide updejtuvan - dali da se updejta ili ne (true/false)
    //componentWillUpdate - komponentata se sprema za rerendering
    //componentWillReceiveProps - go dobivame stejtot i props
    //componentDidUpdate - otkako kje se updejtira
    //componentWillUnmount - kako destruktor
}

class ToDoForm extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.changeLastToDoHandler} />
                <buton onClick={this.props.addToList}> Add To List</buton>
            </div>
        );
    }
}

class ToDoList extends Component {

    render() {
        return (
            <div>
                {this.props.todos.map((n) =>
                    <ul key={n.id}>
                        <li>
                        {n.content}
                        <input type="button" value="Remove" name={n.id} onClick={this.props.removeFromList} />
                        </li>
                    </ul>
                )}
            </div>
        );
    }
}

export default ToDo;