'use strict'
const Teacher=use('App/Models/Teacher')

class TeacherController {
  async index ({response}) {
    const teachers=await Teacher.all()

    response.status(200).json({
      data:teachers
    })
  }

  async create ({response,request}) {
    const {name,lastName}=request.post()

    const teacher= await Teacher.create({name,lastName})
    response.status(201).json({
      message:'Teacher created',
      data:teacher
    })
  }

  
  async show ({response,params:{id}}) {

    const teacher=await Teacher.find(id)

    if(teacher){
        response.status(200).json({
          message:'here is teacher',
          data:teacher
        })
    }else{
      response.status(404).json({
        message:'teacher not found'
      })
    }

  }

  async update ({request,response,params:{id}}) {
   
    const teacher=await Teacher.find(id);
    if(teacher){
      const {name,lastName} =request.post();
      teacher.name=name
      teacher.lastName=lastName

      await teacher.save()
      
      response.status(200).json({
        message:'Teacher updated',
        data:teacher
    })
    }else{
      response.status(404).json({
        message:'Teacher not found'
    })
    }
  }

  
  async delete ({response,params:{id}}) {
    const teacher=await Teacher.find(id)

    if(teacher){
      await teacher.delete()
        response.status(200).json({
          message:'teacher deleted'
        })
    }else{
      response.status(404).json({
        message:'teacher not found'
      })
    }
  }
}

module.exports = TeacherController
