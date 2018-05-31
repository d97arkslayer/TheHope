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
        response.status(201).json(grade)
    }

    async show({ response, params: { id } }) {
        const grade = await Grade.find(id)
        if (Grade) {
            response.status(200).json(grade)
        } else {
            response.status(404).json(id)
        }

    }

    async edit() {}

    async update({ request, response, params: { id } }) {
        const grade = await Grade.find(id)
        if (grade) {
            const { name } = request.post()
            grade.name = name
            await grade.save()
            response.status(200).json(grade)
        } else {
            response.status(404).json(id)
        }
    }

    async destroy({ response, params: { id } }) {
        const grade = await Grade.find(id)
        if (grade) {
            await grade.delete()
            response.status(200).json(id)
        } else {
            response.status(404).json(id)
        }
    }
}

module.exports = GradeController