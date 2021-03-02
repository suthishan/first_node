const fs = require('fs')

// fs.readFile('note.txt',  (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString())
//     }
// })
// //readfile

// fs.writeFile('note.txt', 'testing', (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('testing write')
//     }
// })
// //write file

// fs.appendFile('note.txt', 'testing node js \r \n', (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('testing append')
//     }
// })

//append file

if(!fs.existsSync('')){
fs.mkdir('suthishan',(err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log('new folder created')
    }
})
}else{
    console.log('folder already exist')
}

//mk new dir

const readStream = fs.createReadStream('note.txt',{
    encoding: 'utf-8'
});
readStream.on('data', chunk=>{
    console.log('#### TEST ####')
    console.log(chunk.toString())
})