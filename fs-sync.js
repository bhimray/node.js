const { writeFileSync } = require("fs")

const {readFileSync, wrtieFileSync} = require('fs')

const first = readFileSync('./content/file.txt', 'utf8')
const second = readFileSync('./content/subfolder/test.txt', 'utf8')
console.log(second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first} and ${second}`,
    {flag:'a'}
)