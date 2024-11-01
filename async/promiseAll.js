



// we've to return the promise, when all of the promises are resolved. (accepts an array of promises.)
// and if rejection then the reason should be with the first one yeah. 

function myPromiseAll(taskList){
    const results = []; 

    let promisesCompleted = 0; 


    return new Promise((resolve, reject) => {
        taskList.forEach((promise,index)=>{
            promise.then((val)=>{
                results[index] = val; 
                promisesCompleted++; 
                if(promisesCompleted === taskList.length){
                    resolve(results); 
                }
            }).catch((err)=>{
                reject(err); 
            })
        }); 
    })
};

function task(time) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(time);
      }, time);
    });
  }
  
  const taskList = [task(1000), task(5000), task(3000)];

  myPromiseAll(taskList).then((res)=> {
    console.log(res); 
  }).catch((err)=>{
    console.log(err); 
  })