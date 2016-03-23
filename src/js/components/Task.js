// import React
var React = require('react');
var classNames = require('classnames');

import Task from '../objects/Task';
import Logs from '../utils/logs';


// TODO: move check-icon button to a separate component


var TaskComponent = React.createClass({


    getInitialState: function(){

        let ref = new Task({id: this.props.taskID, todoID: this.props.todoID});

        // setting the initial state of task component
        return {
            id: this.props.taskID,
            name: '',
            ref,
            isChecked: this.props.isChecked
        }

    },

    componentWillMount: function(){
        var _this = this;
        this.state.ref.FBref.on('value', function(data){
            let {name,isChecked} = data.val();
            _this.setState({name, isChecked});
        });
    },


    // to check/uncheck tasks
    toggleTask: function(e){
        e.preventDefault();

        // define the new state
        let newState = {'isChecked': !this.state.isChecked};

        // attach to the DOM
        this.state.ref.update(newState);
    },


    // render component
    render: function(){

        // generate list of classes
        var liClasses = classNames({
                "small-12 columns task": true,
                "task--checked": this.state.isChecked,
                "task--leftContent float-left": this.props.i % 2 === 0,
                "task--rightContent float-right": this.props.i % 2 !== 0
            })
            ;


        return (
            <li className={liClasses}>

                <div className="small-10 columns task__title">
                    <span>{this.props.name}</span>
                </div>

                <div
                    className="small-2 columns task__checkMarker  text-right">
                    <a href="#" className="marker" onClick={this.toggleTask}>
                        <i className="fa fa-check marker__icon"></i>
                    </a>
                </div>


            </li>
        );
    }
});


export default TaskComponent;