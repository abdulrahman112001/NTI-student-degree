

const yargs = require("yargs");
const data = require('./student')

yargs.command({
    command:"add",
    builder:{
        id:{
            describe : 'name student',
            type : 'number',
            demandOption:true,    

        },
        name : {
            describe : 'name student',
            type : 'string',
            demandOption:true,         
        },
        degree : {
            describe : 'name student',
            type : 'array',
            demandOption:true,         
        },
        comment : {
            describe : 'any comment student',
            type : 'number',
            demandOption:false,         
        }
    },
    handler:()=>{
        console.log("add")
        data.addStudent(yargs.argv.id,yargs.argv.name,yargs.argv.degree,yargs.argv.comment)
    }
})
// delete
yargs.command({
    command:"delete",
    builder:{
        id:{
            describe : 'name student',
            type : 'number',
            demandOption:true,    

        },
    
    },
    handler:()=>{
        // console.log("")
        data.deleteStu(yargs.argv.id)
    }
})
// read
yargs.command({
    command:"read",
    builder:{
        id:{
            describe : 'name student',
            type : 'number',
            demandOption:true,    

        },
    
    },
    handler:()=>{
        // console.log("")
        data.readStudent(yargs.argv.id)
    }
})

// list 
yargs.command({
    command:"list",
 
    handler:()=>{
        // console.log("")
        data.listStudent(yargs.argv.id)
    }
})
//update
yargs.command({
    command:"update",
    builder:{
        id:{
            describe : 'name student',
            type : 'number',
            demandOption:true,    

        },
        name : {
            describe : 'name student',
            type : 'string',
            demandOption:true,         
        }
   
    },
    handler:()=>{
        console.log("add")
        data.ubdateStu(yargs.argv.id,yargs.argv.name)
    }
})
yargs.parse()


