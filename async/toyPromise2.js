

function samplePromise(a){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(a == 1){
                reject('fuck no'); 
            }

            resolve(a + a); 
        },1000); 
    })
}

// this will also involve working on chaining of promises...

class ToyPromise {
    _fullFillmentTasks = []; 
    _rejectionTasks = []; 
    _promiseResult = undefined; 
    _promiseState = 'pending';

    then(onFulfilled, onRejected){
        const resultPromise = new ToyPromise(); 
        const fulFillmentTask = () => {            
            if(typeof onFulfilled === "function"){
               const returned =  onFulfilled(this._promiseResult); 
                resultPromise.resolve(returned); 
            }
            else{
                resultPromise.resolve(this._promiseResult); 
            }
        }

        const rejectionTask = () => {
            if(typeof onRejected === "function"){                
                const returned = onRejected(this._promiseResult); 
                resultPromise.resolve(returned); 
            }
            else{
                resultPromise.reject(this._promiseResult); 
            }
        }
        return resultPromise;    
    }

    resolve(value){
        if(this._promiseState !== "pending") return this; 
        this._promiseState = 'fulfilled'; 
        this._promiseState = value; 
        this._clearAndEnqueueTasks(this._fullFillmentTasks); 
        return this; // enable chaining... 
    }

    reject(reason){
        if(this._promiseState !== "pending") return this; 
        this._promiseState = 'rejected'; 
        this._promiseState = reason; 
        this._clearAndEnqueueTasks(this._rejectionTasks); 
        return this; // enable chaining... 
    }

    addToTaskQueue(task){
        setTimeout(task,0); 
    }

    _clearAndEnqueueTasks(tasks){
        this._fullFillmentTasks = undefined; 
        this._rejectionTasks = undefined; 
        tasks.map(addToTaskQueue); 
    }


  
}


new ToyPromise().resolve(2).then((data)=>{
    console.log("hey"); 
});