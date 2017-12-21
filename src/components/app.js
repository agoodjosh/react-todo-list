import 'materialize-css/dist/css/materialize.min.css'
import React, {Component} from 'react';
import AddItem from './add_item';
import ListContainer from './list_container';

import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=jauxshskey';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoData: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    componentDidMount() {
        this.getData();

    }

    async getData() {
        const resp = await axios.get(`${BASE_URL}/todos${API_KEY}`);

        this.setState({
            todoData: resp.data.todos
        })
        //     .then( (resp) => {
        //     console.log('Response', resp);
        //     this.setState({
        //         todoData: resp.data.todos
        //     })
        // } );
    }

    async addItem(item) {
        item.complete = false;

        await axios.post(`${BASE_URL}/todos${API_KEY}`, item);

        this.getData();

        //     .then( (resp) => {
        //     console.log('Add - Resp: ', resp);
        //
        //     this.getData();
        // });
    }

    async toggleComplete(id) {
        await axios.put(`${BASE_URL}/todos/${id + API_KEY}`);

        this.getData();
    }

    async deleteItem(id) {
        await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

        this.getData();
    }


    render() {
        const { todoData } = this.state;

        return (
            <div className="container">
                <h1 className="center-align">To-Do List</h1>
                <AddItem add={this.addItem} />
                <ListContainer delete={this.deleteItem} list={todoData} toggleComplete={this.toggleComplete} />
            </div>
        );
    }
}

export default App;
