'use strict'
const Student = use('App/Models/Student')
class StudentController {
    async index({ response }) {
        const students = await Student.all()

        response.status(200).json({
            message: 'Here are your students.',
            data: students
        })
    }

    async create() {}

    async store({ request, response, params: { id } }) {
        const { name, document, age, email } = request.post()
        const student = await Student.create({ name, document, age, email })
        response.status(201).json({
            message: 'Successfully created a new Student.',
            data: student
        })
    }

    async show({ response, params: { id } }) {

        const student = await Student.find(id)
        if (student) {
            response.status(200).json({
                message: 'Here is your student.',
                data: student
            })
        } else {
            response.status(404).json({
                message: 'Student not found.',
                data: id
            })
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
            response.status(200).json({
                message: 'Successfully updated this student.',
                data: student
            })
        } else {
            response.status(200).json({
                message: 'Student not found.',
                id
            })
        }
    }

    async destroy({ response, params: { id } }) {
        const student = await Student.find(id)
        if (student) {
            await student.delete()
            response.status(200).json({
                message: 'Successfully deleted this student.',
                id
            })
        } else {
            response.status(200).json({
                message: 'Student not found.',
                id
            })
        }
    }
}

module.exports = StudentController