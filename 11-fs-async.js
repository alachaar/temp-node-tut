const { readFile, writeFile}=require('fs')
const { resolve } = require('path')
const fs = require('fs').promises;

// readFile('./content/first.txt','utf8', (err,result) =>{
// if (err){
//     console.log(err)
//     return    
// }
//     const first=result
//     readFile('./content/second.txt','utf8', (err,result) =>{
//         if (err){
//             console.log(err)
//             return    
//         }
//         const second=result
//         writeFile(
//         './content/result-async.txt',
//         `here is the result : ${first}, ${second}`
//         ,(err,result)=>{
//             if(err){
//                 console.log(err)
//                 return
//             }
//             console.log(result)
//         })

//     })
// })


const getdata = async() => {
    try{
        const file1= await readf('./content/first.txt')
        const file2=await readf('./content/second.txt')
        const result=await writef('./content/result2-async.txt',`here is the result : ${file1}, ${file2}`)
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}

getdata()

function readf(path) {
    // return fs.readFile(path, 'utf-8') // Correct usage of 'utf-8' for encoding
    //     .then((data) => data)
    //     .catch((err) => {
    //         throw new Error(`Error reading file: ${err.message}`);
    //     });
    return new Promise((resolve,reject) => {
        const file =fs.readFile(path, 'utf-8')
        if (file) {
            return resolve(file)
        }
        else{
            reject('there is an error reading file')
        }
    })
}

function writef(path, data) {
    // return fs.writeFile(path, data) // No need to pass encoding here
    //     .then(() => 'File written successfully')
    //     .catch((err) => {
    //         throw new Error(`Error writing file: ${err.message}`);
    //     });
    return new Promise((resolve,reject) => {
        const file =fs.writeFile(path,data)
        if (file) {
            return resolve('file written successfullyyyyyy')
        }
        else{
            reject('there is an error writng file')
        }
    })
}