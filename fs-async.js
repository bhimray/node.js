const {readFile, writeFile} = require('fs')

readFile(
    './content/file.txt', 'utf8', 
    (err, result)=>{
        if (err){
            console.log("error", err)
        }
        const first = result;
        readFile(
            './content/subfolder/test.txt', 'utf8',
            (err, result)=>{
                if (err){
                    console.log(err);
                    return;
                }
                const second = result;
                writeFile(
                    './content/result-async.txt',
                    `This is async file: ${first} and ${second}`,
                    (err, result)=>{
                        if(err){
                            console.log(err);
                            return;
                        }
                        console.log('result',result)
                    }
                )
            }
        )

    }
)