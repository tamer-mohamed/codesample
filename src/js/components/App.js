// import React
var React = require('react');

import TodoComponent from './Todo';
import PostComponent from './Post';
import TaskControlComponent from './TaskControl';
import TodoInfo from './TodoInfo';


var AppComponent = React.createClass({

    render: function(){
        return (
            <div className="row todoApp__container">
                <div className="small-12 columns">
                    <div className="row">

                        <div className="small-12 columns">
                            <TaskControlComponent todoID={this.props.todoID}
                                                  key={`taskControl-${this.props.todoID}`}/>
                        </div>


                        <div className="small-12 columns border"/>

                        <div className="small-12 columns">
                            <TodoInfo todoID={this.props.todoID} key={`todoInfo-${this.props.todoID}`}/>
                        </div>

                        <div className="small-12 columns">
                            <TodoComponent todoID={this.props.todoID} key={`todoList-${this.props.todoID}`}/>
                        </div>
                        <PostComponent todoID={this.props.todoID}/>
                    </div>
                </div>
            </div>
        );
    }
});

export default AppComponent;