
const fs = require('fs')

const dataStudent = ()=>{

    try{
        const dataStu = fs.readFileSync('dataStudent.json').toString()
        return JSON.parse(dataStu)
    }
    catch{
        return []
    }


}
const saveData=(data)=>{
    const SaveDataStudent = JSON.stringify(data)
    fs.writeFileSync('dataStudent.json',SaveDataStudent)
}
// add student
const addStudent = (id,name,degree,comment)=>{

    const data = dataStudent()
    console.log(data)

    const findStudeent = data.filter((e)=>{
        return e.id === id
    })
    if(findStudeent.length == 0){
        let degTotal =0;
        degree.forEach(e => {
            degTotal+=e
        });
        data.push({
            id,name,degree,comment,degTotal
        })
        saveData(data)
        console.log('saved')
    }else{
        console.log('sorry this id in existing')
    }

}
// delete student

const deleteStu=(id)=>{
    const data = dataStudent()

    const studExit=data.find((e)=>{
        return e.id===id
    })
    if(studExit){
        const index = data.indexOf(studExit)

        data.splice(index,1)
        saveData(data)
        console.log('deleted')

    }
    else{
        console.log('not found')
    }


}
// read
const readStudent = (id)=>{
    const data = dataStudent()
    const exitStudent=data.find((el)=>{
        return el.id === id
    })
    if (exitStudent){
        console.log(exitStudent)
        saveData(data)

    }
    else{
        console.log(`sorry this ${id} is not found`)
    }
}

// list 

const listStudent = ()=>{
    const data = dataStudent()
    data.forEach((el)=>{
        console.log(el)
    })
}
// update

const ubdateStu = (id,name)=>{
    const data = dataStudent()
    const findStud = data.find((e)=>{
        return e.id===id
    })
    if(findStud){
        const student=data.indexOf(findStud)
        findStud.name = name
        data.splice(student,1,findStud)
        saveData(data)
        console.log('the student is updated')
    }else{
        console.log(`sorry the id => ${id} is not found`)
    }
}


module.exports={
    addStudent,
    deleteStu,
    readStudent,
    listStudent,
    ubdateStu
}


