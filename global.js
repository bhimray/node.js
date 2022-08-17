// __dirname - path to current directory
//__filename - file name
// require - function to use modules
// module - infor about current module (file)
// proces - info about env where the program is being executed

console.log(__dirname)
const newfunc =(()=>{
    console.log("module")
})

newfunc()