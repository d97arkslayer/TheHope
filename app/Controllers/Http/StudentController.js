'use strict'
const Student = use('App/Models/Student')
class StudentController {
    async index({ response }) {
        const students = await Student.all()

        response.status(200).json(students)
    }

    async create() {}

    async store({ request, response, params: { id } }) {
        const { name, document, age, email } = request.post()
        const student = await Student.create({ name, document, age, email })
        response.status(201).json(student)
    }

    async show({ response, params: { id } }) {
        const student = await Student.find(id)
        if (student) {
            response.status(200).json(student)
        } else {
            response.status(404).json(id)
        }
    }

    async edit() {}

    async update({ request, response, params: { id } }) {
        const student = await Student.find(id)
        if (student) {
            const { name, document, age, email } = request.post()
            student.name = name
            student.document = document
            student.age = age
            student.email = email
            await student.save()
            response.status(200).json(student)
        } else {
            response.status(404).json(id)
        }
    }

    async destroy({ response, params: { id } }) {
        const student = await Student.find(id)
        if (student) {
            await student.delete()
            response.status(200).json(id)
        } else {
            response.status(404).json(id)
        }
    }
}

module.exports = StudentController