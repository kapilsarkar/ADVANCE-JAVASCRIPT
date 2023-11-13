const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB Calls, Cryptography,networkCalls

    setTimeout(function(){
       console.log("Async Task is Completed")
    },1000)

})