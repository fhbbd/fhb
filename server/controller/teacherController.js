const Teacher = require('../model/teacherModel')


const teacherGet =(req,res)=>{
res.send("teacher")
}
const createTeacher = async (req,res)=>{
const {name,age } = req.body
    const newTeacher = new Teacher({
        name,
        age
    })
   const teacherCreate = await  newTeacher.save()
res.send(teacherCreate)
}

module.exports={teacherGet, createTeacher}