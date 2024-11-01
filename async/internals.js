function wait() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Timeout resolved');
      }, 2000);
    });
  }
  
  async function main() {
    console.log('Entry');
  
    const result = await wait();
    console.log(result);
  
    console.log('Exit');
    return 'Return';
  }
  
//   main().then((result) => {
//     console.log(result);
//   });


function *main2(){
    console.log('Entry');

   return new Promise((resolve) => {
    wait().then((result) => {
        console.log(result);
        console.log('Exit');
        resolve('Return');
    })    
   })
    
}

main2().then((result) => {
    console.log(result);
});