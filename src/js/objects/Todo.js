import _ from 'lodash';
import API from '../utils/api';
import Task from './Task';
import EP from '../utils/constants';

//--------------------------------


export default class Todo {

    constructor(opts){

        let options = opts || {};

        this.id = options.id || null;
        this.data = options.data || null;


        // @private
        this._attributes = {
            id: {required: true}, title: {required: true}, description, tasks
        };

    }


    list(){
        return API.get(this.id, EP.TASK);
    }


    addTask(data){
        let task = new Task();
        return task.add(data);
    }

    markAsFinished(id){
        let task = new Task();
        return task.update(id, {finsihed: true});
    }


    undo(){
        let task = new Task();
        return task.update(id, {finsihed: false});
    }


    //TODO: Adds the ability to create more than one todo list
    create(fields){

    }

    get(){

    }

    update(){

    }

    remove(){

    }


}