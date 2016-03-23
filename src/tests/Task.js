import Task from '../js/objects/Task';

//-------------------------

describe('Task class functionality', function(){

    let TaskInstance;

    beforeEach(()=>{
        TaskInstance = new Task({todoID: 1});
    });

    it('should return object', (done)=>{
        TaskInstance.FBref.tasks.once('value', (data)=>{
            let tasks = data.val();
            if(tasks){
                expect(tasks).to.be.a('object');
            }
            else{
                expect(tasks).to.be.equal({});
            }

            done();
        })
    });

    it('should mark all finished', (done)=>{
        TaskInstance.markAllAsFinished().then(()=>{
            done();
        })
    });

    it('should mark all finished', (done)=>{
        TaskInstance.markAllAsFinished().then(()=>{
            done();
        })
    });


});