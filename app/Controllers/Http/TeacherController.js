'use strict'
const Teacher = use('App/Models/Teacher')
const Person = use('App/Models/Person')

class TeacherController {
    async index({ response }) {
        //const persons = await Person.query().with('teacher').fetch()
        const teachers = await Person.query().has('teacher').fetch()
            //console.log(teachers)
        response.status(200).json(teachers)
    }

    async create() {}

    async store({ response, request }) {
        const { name, lastName, documentNumber, email, password } = request.post()
        const person = await Person.create({ name, lastName, documentNumber, email, password })
        const person_id = person.id
        const teacher = await Teacher.create({ person_id })
        console.log(teacher.toJSON())
        response.status(201).json(teacher)
    }


    async show({ response, params: { id } }) {

        const teacher = await Teacher.find(id)
        const person_id = teacher.person_id
        console.log(person_id)
        const person = await Person.find(person_id)
        response.status(200).json(person)


    }

    async update({ request, response, params: { id } }) {

        const teacher = await Teacher.find(id);
        if (teacher) {
            const person_id = teacher.person_id
            const person = await Person.find(person_id)
            const { name, lastName, documentNumber, email } = request.post();
            person.name = name
            person.lastName = lastName
            person.documentNumber = documentNumber
            person.email = email
                //person.password = password
            await person.save()

            response.status(200).json(person)
        } else {
            response.status(404).json({
                message: 'Teacher not found'
            })
        }
    }


    async destroy({ response, params: { id } }) {
        const teacher = await Teacher.find(id)

        if (teacher) {
            const person_id = teacher.person_id
            const person = await Person.find(person_id)
            await teacher.delete()
            await person.delete()
            response.status(200).json({
                message: 'teacher deleted'
            })
        } else {
            response.status(404).json({
                message: 'teacher not found'
            })
        }
    }
}

module.exports = TeacherController