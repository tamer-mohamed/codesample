// import React
import React from 'react';

var TaskComponent = React.createClass({
    render: function(){

        return (
            <li class="row task">

                <!-- element task-title -->
                <div class="small-10 columns task__title">
                    <span>{this.props.title}</span>
                </div>
                <!-- element task-title -->

                <!-- element checker -->
                <div class="small-2 columns task__checkMarker text-right">
                    <a class="marker marker--checked">
                        <i class="fa fa-check marker__icon"></i>
                    </a>
                </div>
                <!-- element checker -->

            </li>
        );
    }
});


module.exports = TaskComponent;