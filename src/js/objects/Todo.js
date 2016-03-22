var Promise = require('es6-promise').Promise;

//--------------------------------
import _ from 'lodash';
import API from '../utils/api';
import Task from './Task';
import EP from '../utils/constants';


export default class Todo {

    constructor(opts){

        let options = opts || {};

        this.id = options.id || null;
        this.FBref = {info: this.ref(), tasks: this.ref()};


        // @private
        this._attributes = {
            id: {required: true}, title: {required: true}
        };

    }

    // use new ref ..
    ref(){
        return API.ref(EP.TASK, this.id);
    }


    // give back ref to list of the tasks
    list(){
        return API.ref(EP.TASK, this.id);
    }

    // mark all tasks as finished
    markAllAsFinished(){
        let _this = this;

        return new Promise((resolve, reject)=>{

            this.FBref.tasks.once('value', (dataSnapshot)=>{
                dataSnapshot.forEach((task)=>{
                    let taskFinished = new Task({id: task.key(), todoID: _this.id});
                    taskFinished.update({isChecked: true});
                    resolve();
                })
            })

        });
    }


    addTask(data){
        let task = new Task();
        return task.add(data);
    }

    markAsFinished(){
        let task = new Task();
        return task.update(this.id, {finsihed: true});
    }


    undo(){
        let task = new Task();
        return task.update(this.id, {finsihed: false});
    }

    get(){
        return API.ref(EP.TODO, this.id);
    }


    //TODO: Add the ability to create more than one todo list, check below some methods
    //create(fields){
    //
    //}
    //
    //get(){
    //
    //}
    //
    //update(){
    //
    //}
    //
    //remove(){
    //
    //}


}