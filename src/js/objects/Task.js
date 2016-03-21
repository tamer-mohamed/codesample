import _ from 'lodash';
import TodoLogs from '../utils/logs';
import API from '../utils/api';
import EP from '../utils/constants';

export default class Task {


    constructor(){

        this.attributes = {id: {required: true}, title: {required: true}, description};
    }


    // CRUD

    //-------------

    get(id){
        return API.get(id, EP.TASK);
    }

    add(task){
        return API.set(task, EP.TASK, this.attributes);
    }

    remove(id){
        return API.remove(id, EP.TASK);
    }

    update(id, data){
        return API.update(id, EP.TASK);
    }


}