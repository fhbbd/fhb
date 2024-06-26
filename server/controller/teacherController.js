const Teacher = require('../model/teacherModel')


const teacherGet = async (req,res)=>{
    const getTeacher = await Teacher.find()
    res.json(getTeacher)
}
const createTeacher = async (req,res)=>{
const {name,age } = req.body
    const newTeacher = new Teacher({
        name,
        age
    })
   const teacherCreate = await  newTeacher.save()
res.json(teacherCreate)
}

module.exports={teacherGet, createTeacher}