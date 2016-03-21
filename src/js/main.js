var $ = require('jquery');
var foundation = require('../../node_modules/foundation-sites/dist/foundation.js');


// import app objects
import Todo from './objects/Todo';


// import React
import React from 'react';
import ReactDOM from 'react-dom';


var app = require('./components/App');

// since we are dealing with one TODO only, we will be using TODO(ID:1)



// init foundation
//$(document).foundation();

ReactDOM.render(
    <app></app>,
    document.getElementById('todoApp')
);


//var Application = (function(){
//
//    function init(){
//
//
//
//
//    }
//
//    return {
//        init
//    }
//
//})();
//
//
//Application.init();
