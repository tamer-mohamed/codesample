// import React
var React = require('react');

import Task from '../objects/Task';
import debugLog from '../utils/logs';
import Marker from './Marker';


var PostComponent = React.createClass({

    getInitialState: function(){


        return {
            name: '',
            desc: '',
            isChecked: false,
            ref: null
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
            let ref = new Task({todoID: this.props.todoID}).ref();

            ref.push({
                name: this.state.name,
                desc: '',
                isChecked: false
            });

            //reset input
            this.setState(this.getInitialState());
            this.setState({name: "", desc: "", "isChecked": false});
        }
        else{

            // TODO: handle error message for the user
            throw new Error('Task title is required field');

        }
    },

    render: function(){
        return (
            <div className="small-12 columns taskPublish">
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="small-11 columns taskPublish__input" onChange={this.onChange}>
                            <input type="text" value={this.state.name} onclick={this.handleSubmit}
                                   placeholder="Things I should do next..."/>
                        </div>

                        <div className="small-1 columns text-right">

                            <div className="taskPost__submit">
                                <a
                                    href="#"
                                    onClick={this.handleSubmit} className="button">
                                    <Marker/>
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