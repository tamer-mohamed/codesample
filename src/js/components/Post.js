// import React
var React = require('react');

import Task from '../objects/Task';
import debugLog from '../utils/logs';


var PostComponent = React.createClass({

    getInitialState: function(){


        return {
            name: '',
            desc: '',
            isChecked: false,
            Task: new Task({todoID: this.props.todoID})
        }

    },

    // handle when input change
    onChange: function(e){
        this.setState({name: e.target.value});
    },


    // handle post task
    handleSubmit: function(e){
        e.preventDefault();


        if(typeof this.state.name === 'string' && this.state.name.length){
            this.state.Task.FBref.push({
                name: this.state.name,
                isChecked: false
            });

            //reset input
            this.replaceState(this.getInitialState());
        }
        else{

            // TODO: handle error message for the user
            // maybe use sweetalert !?
            throw new Error('Task title is required field');

        }
    },

    componentWillUnmount: function(){
        // delete FB ref
        this.state.Task.FBref.off();
    },

    render: function(){
        return (
            <div className="small-12 columns taskPublish">
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="small-11 columns taskPublish__input">
                            <input type="text" value={this.state.name} onChange={this.onChange}
                                   onclick={this.handleSubmit}
                                   placeholder="Things I should do next..."/>
                        </div>


                        <div className="small-1 columns text-right">

                            <div className="taskPost__submit">
                                <a href="#"
                                   onClick={this.handleSubmit} className="button">
                                    <i className="fa fa-plus"></i>
                                </a>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
});


export default PostComponent;