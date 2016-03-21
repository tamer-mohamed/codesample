// import React
import React from 'react';

var todoComponent = require('./Todo');

var App = React.createClass({
    render: function(){
        return (
            <todoComponent id="1">
            </todoComponent>
        );
    }
});

export default App;