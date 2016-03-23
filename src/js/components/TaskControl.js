// import React
var React = require('react');
var swal = require('sweetalert');

import Logs from '../utils/logs';
import Todo from '../objects/Todo';
import Task from '../objects/Task';

/**
 * Task control component
 *
 * Contains all inputs/filters that control tasks (ex. Mark all as finished)
 */
var TaskControlComponent = React.createClass({

    getInitialState: function(){
        return {
            todo: new Todo({id: this.props.todoID}),
            id: this.props.todoID,
            allFinished: false
        }

    },

    markAll: function(){

        this.state.todo.markAllAsFinished().then(()=>{
            Logs.debugLog('ALl is marked as finished');

            swal("Good job!", "Everything is done, have fun!!", "success");

            this.setState({
                allFinished: !this.state.allFinished
            });
        });
    },


    componentWillMount: function(){
        this.state.todo.FBref.tasks.on('value', (data)=>{


            // let's check if there is any un finished tasks
            var uncheckedTasks = _.reject(data.val(), function(o){
                return o.isChecked
            });
            // if there is any unchecked tasks, set allFinished with false
            this.setState({
                allFinished: uncheckedTasks.length >= 0
            });

        });
    },


    componentWillUnmount: function(){
        // delete FB ref
        this.state.todo.FBref.tasks.off();
        this.state.todo.FBref.info.off();
    },


    render: function(){
        let text = this.state.allFinished ? 'Mark all as finished' : 'Mark all as Undone';
        return (

            <ul className="tasksControl clearfix">

                <li className="tasksControl__checkAll">
                    <a href="#" className="tasksControl__checkAll" onClick={this.markAll}>
                        <h5>{text}</h5>

                        <span className="tasksControl__checkAll__iconHolder">
                            <i className="fa fa-check"/>
                        </span>
                    </a>
                </li>

            </ul>
        );
    }
});


export default TaskControlComponent;