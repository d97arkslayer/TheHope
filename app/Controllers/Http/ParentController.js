'use strict'

const Parent=use('App/Models/Parent')

class ParentController {
  async index ({response}) {
    const parents=await Parent.all()

    response.status(200).json({
      data:parents
    })
  }

  async create ({response,request}) {
    const{name,lastName,age,sonName,phone}=request.post()

    const parent= await Parent.create({name,lastName,age,sonName,phone})
    response.status(201).json({
      message: 'Parent created :-)',
      data:parent
    })
  }

  async store () {
  }

  async show ({response,params:{id}}) {
    const parent=await Parent.find(id)

    if(parent){
      response.status(200).json({
        message: 'Here is parent :-)',
        data:parent
      })
    }
      else{
        response.status(404).json({
          message:'Parent not found :-('
        })
      }
    
  }

  async edit () {
  }

  async update ({request,response,params:{id}}) {
    const parent=await Parent.find(id)
    if(parent){
      const {name,lastName,age,sonName,phone}=request.post()
      parent.name=name;
      parent.lastName=lastName;
      parent.age=age;
      parent.sonName=sonName;
      parent.phone=phone;

      await parent.save()

      response.status(200).json({
        message:'Parent updated :-)',
        data:parent

  })
}else{
  response.status(404).json({
    message:'Parent no found :-('
  })
}
  }

  async delete ({response,params:{id}}) {
    const parent= await Parent.find(id)

    if(parent){
      await parent.delete()
      response.status(200).json({
        message:'Parent deleted :-)'
      })
    }else{
      response.status(404).json({
        message:'Parent not found :-('
      })
    }

  }
}

module.exports = ParentController
