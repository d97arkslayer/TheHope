'use strict'
const Student = use('App/Models/Student')
const Person = use('App/Models/Person')
class StudentController {
    async index({ response }) {
        const students = await Person.query().has('student').fetch()
        response.status(200).json(students)
    }

    async create() {}

    async store({ request, response }) {
        const { name, lastName, documentNumber, email, password } = request.post()
        const person = await Person.create({ name, lastName, documentNumber, email, password })
        const person_id = person.id
        const student = await Student.create({ person_id })
        response.status(201).json(student)
    }

    async show({ response, params: { id } }) {
        const student = await Student.find(id)
        if (student) {
            const person_id = student.person_id
            const person = await Person.find(person_id)
            response.status(200).json(person)
        } else {
            response.status(404).json(id)
        }
    }

    async edit() {}

    async update({ request, response, params: { id } }) {
        const student = await Student.find(id)
        if (student) {
            const person_id = student.person_id
            const person = await Person.find(person_id)
            const { name, lastName, documentNumber, email } = request.post()
            person.name = name
            person.lastName = lastName
            person.documentNumber = documentNumber
            person.email = email
            await person.save()
            response.status(200).json(person)
        } else {
            response.status(404).json(id)
        }
    }

    async destroy({ response, params: { id } }) {
        const student = await Student.find(id)
        if (student) {
            const person_id = student.person_id
            const person = await Person.find(person_id)
            await student.delete()
            await person.delete()
            response.status(200).json(id)
        } else {
            response.status(404).json(id)
        }
    }
}

module.exports = StudentController