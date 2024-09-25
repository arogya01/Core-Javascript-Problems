

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

// understanding classes on a basic level 
// classes are basically in js are for creation of objects, or in general they're for abstracting code at a specific level ? enhances the reusablity because they coupld the state and methods associated together. 
// right now, on a super basic level, we've got the constructor and diff methods with it yeah. 

class Promise {
    _fullFillmentTasks = []; 
    _rejectionTasks = []; 
    _promiseResult = undefined; 
    _promiseState = 'pending';

    then(onFulfilled, onRejected){
        const fulFillmentTask = () => {
            if(typeof onFulfilled === "function"){
                onFulfilled(this._promiseResult); 
            }
        }

        const rejectionTask = () => {
            if(typeof onRejected === "function"){
                onRejected(this._promiseResult); 
            }
        }

        switch(this._promiseResult){
            case 'pending': 
                this._fullFillmentTasks.push(fullFillmentTasks); 
                this._rejectionTasks.push(rejectionTask);
            case 'fulfilled':
                addToTaskQueue(fulFillmentTask);
                break; 
            case 'rejected': 
                addToTaskQueue(rejectionTask);
                break; 
            default: 
                throw new Error('Invalid state');
        }
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

    _clearAndEnqueueTasks(tasks){
        this._fullFillmentTasks = undefined; 
        this._rejectionTasks = undefined; 
        tasks.map(addToTaskQueue); 
    }


    addToTaskQueue(task){
        setTimeout(task,0); 
    }
}