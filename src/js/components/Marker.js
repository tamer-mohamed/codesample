// import React
var React = require('react');


var Marker = React.createClass({

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
            <i className="fa fa-plus"/>
        );
    }
});


export default Marker;