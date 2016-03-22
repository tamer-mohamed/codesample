// import React
var React = require('react');


// Modules
import _ from 'lodash';
import Todo from '../objects/Todo';
import TaskComponent from './Task';
import Task from '../objects/Task';
import Logs from '../utils/logs';


var TodoComponent = React.createClass({

    getInitialState: function(){

        return {
            // hold FB ref .. can be chained to (update,remove)
            todo: new Todo({id: this.props.todoID}),
            // hold the Todo id
            id: this.props.todoID,
            // hold the latest fetched data (tasks)
            tasks: []
        }


    },

    componentWillMount: function(){
        // populate tasks info once the data is available
        this.state.todo.FBref.tasks.on('value', this.watchTasks);
    },


    // we basically need to update our view and state when child_chnged triggered
    // task update has `data` argument that holds new updated data
    watchTasks: function(data){
        let dataVal = data.val(),
            tasks = [];

        _.forEach(dataVal, function(value, key){
            let task = value;
            task['.key'] = key;

            tasks.push(task);
        });
        this.setState({
            tasks
        })
    },


    componentWillUnmount: function(){
        // delete FB ref
        this.state.todo.tasks.off();
        this.state.todo.info.off();
    },


    render: function(){
        Logs.debugLog('Rendering & Loading tasks ----------------------');
        let i = -1;
        return (


            <ul className="tasksList row">
                {_.map(this.state.tasks, (task)=>{
                    i++;
                    return (
                        <TaskComponent name={task.name} isChecked={task.isChecked} i={i} todoID={this.props.todoID}
                                       taskID={task['.key']} key={task['.key']}>
                        </TaskComponent>
                    )
                })}

            </ul>
        );
    }
});

export default TodoComponent;