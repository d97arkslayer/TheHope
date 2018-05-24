'use strict'
const Grade = use('App/Models/Grade')

class GradeController {
    async index({ response }) {
        const grades = await Grade.all()
        response.status(200).json(grades)
    }

    async create() {}

    async store({ request, response, params: { id } }) {
        const { name } = request.post()
        const grade = await Grade.create({ name })
        response.status(201).json({
            message: 'Successfully created a new Grade.',
            data: grade
        })
    }

    async show({ response, params: { id } }) {
        const grade = await Grade.find(id)
        if (Grade) {
            response.status(200).json({
                message: 'Here is your grade.',
                data: grade
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
        const grade = await Grade.find(id)
        if (grade) {
            const { name } = request.post()
            grade.name = name
            await grade.save()
            response.status(200).json({
                message: 'Successfully updated this grade.',
                data: grade
            })
        } else {
            response.status(200).json({
                message: 'Grade not found.',
                id
            })
        }
    }

    async destroy({ response, params: { id } }) {
        const grade = await Grade.find(id)
        if (grade) {
            await grade.delete()
            response.status(200).json({
                message: 'Successfully deleted this grade.',
                id
            })
        } else {
            response.status(200).json({
                message: 'Grade not found.',
                id
            })
        }
    }
}

module.exports = GradeController