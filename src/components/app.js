import 'materialize-css/dist/css/materialize.min.css'
import React, {Component} from 'react';
import todo_data from "../todo_data";
import AddItem from './add_item';
import ListContainer from './list_container';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoData: todo_data
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(item) {
        item.complete = false;
        this.setState({
            todoData: [item, ...this.state.todoData]
        })
    }

    render() {
        const { todoData } = this.state;

        return (
            <div className="container">
                <h1 className="center-align">To-Do List</h1>
                <AddItem add={this.addItem} />
                <ListContainer list={todoData} />
            </div>
        );
    }
}

export default App;
