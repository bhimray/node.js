const { readFile, writeFile} = require("fs").promises

//const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async()=>{
    try{
        const first = await readFile('./content/file.txt', 'utf8')
        const second = await readFile('./content/subfolder/test.txt','utf8')
        await writeFile(
            './content/promise-asyn.txt', 
            `This is async promise request:: ${first} an ${second}`,
            {flag:'a'}
        )
    }
    catch (err){
        console.log(err);
    }
}

start()