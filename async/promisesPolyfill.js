

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
    constructor(execFn){
        try{
            
        }
    }
}