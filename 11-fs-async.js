const { readFile, writeFile}=require('fs').promises  // readFile and writeFile will return a promise
const util=require('util')

// const readFilePromise=util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)


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

// We'll see a better version using promises and async await 


const getdata = async() => {
    try{
        const file1= await readFile('./content/first.txt', 'utf-8')
        const file2=await readFile('./content/second.txt', 'utf-8')
        await writeFile('./content/resultPromise-async.txt',`This is Awesome : ${file1}, ${file2}`)
        console.log(file1 , file2)
        
    }
    catch(err){
        console.log(err)
    }
}

getdata()

// function readf(path) {
//     return new Promise((resolve,reject) => {
//         readFile(path, 'utf-8' , (err,data)=>{
//             if (err) {
//                 reject(err)
//             }
//             else{
//                 resolve(data)      //readFilePromise will play the role of readf it will return a promise : const readFilePromise=util.promisify(readFile)
//             }
//         })
        
//     })
// }

function writef(path, data) {
    return new Promise((resolve,reject) => {
        writeFile(path , data , (err,result) =>{
            if (err) {
                reject(err)
            }
            else{
                resolve(result)
            }
        })
        
    })
}