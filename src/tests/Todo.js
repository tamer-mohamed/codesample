import Todo from '../js/objects/Todo';

//-------------------------

describe('Todo class functionality', function(){

    let TodoInstance;

    beforeEach(()=>{
        TodoInstance = new Todo({id: 1});
    });

    it('should return object of data tasks', (done)=>{
        TodoInstance.FBref.tasks.once('value', (data)=>{
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
        TodoInstance.markAllAsFinished().then(()=>{
            done();
        })
    });

    it('should mark all finished', (done)=>{
        TodoInstance.markAllAsFinished().then(()=>{
            done();
        })
    });


});