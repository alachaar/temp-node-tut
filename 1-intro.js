const age=20

const promise = new Promise ((resolve,reject) =>{
    if (age>=20) {
        resolve('grand')
    }
    else{
        resolve('petit')
    }
} )
console.log(promise)
console.log(`this is my first node app`)
promise.then(data => console.log(data)).catch(error => console.log(error))