
import React, {Component} from 'react';
import './App.css';
import TaskList from './Todo/TastList'
import InputTask from "./Todo/InputTask";

class App extends Component {

    state = {
        tasks: [{id: 1, task: 'Do homework',date1: '01/10/19'},
            {id: 2, task: 'Read book', date1: '12/12/20'}],
        id:3
    }

    addTask = (task,date1) => {
        this.setState({
            tasks: [...this.state.tasks, {id: this.state.id,task ,date1} ],
            id: this.state.id+1  })
    }

    render() {


        return (
            <div className="App">
            <h1>Todo</h1>
            <TaskList tasks={this.state.tasks}/>
        <InputTask addTask={this.addTask} id={this.state.id}/>
        <br/>
        </div>
    );
    }
}

export default App;
