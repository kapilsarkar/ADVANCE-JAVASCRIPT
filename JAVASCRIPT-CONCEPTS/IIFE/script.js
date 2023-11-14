(function chai(){
    //Named IIFE
    console.log('DB Connected')
})();

( (fullName) => {
    //unNamed or Simple IIFE
    console.log(`DB CONNECTED TWO ${fullName}`)
})('Kapil Sarkar')