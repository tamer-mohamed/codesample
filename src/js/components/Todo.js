// import React
import React from 'react';

var TodoComponent = React.createClass({
    render: function(){

        var tasks = this.props.data.map(function(task){
            return (
                <Task title={task.title} key={task.id}>
                    {task.desc}
                </Task>
            );
        });


        return (
            <ul class="tasksList">
                {tasks}
            </ul>
        );
    }
});

module.exports = TodoComponent;