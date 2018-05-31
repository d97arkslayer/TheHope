'use strict'
const Subject = use('App/Models/Subject')
class SubjectController {
    async index({ response }) {
        const subjects = await Subject.all()
        response.status(200).json(subjects)
    }

    async create() {}

    async store({ request, response, params: { id } }) {
        const { name } = request.post()
        const subject = await Subject.create({ name })
        response.status(201).json(subject)
    }

    async show({ response, params: { id } }) {
        const subject = await Subject.find(id)
        if (subject) {
            response.status(200).json(subject)
        } else {
            response.status(404).json(id)
        }
    }

    async edit() {}

    async update({ request, response, params: { id } }) {
        const subject = await Subject.find(id)
        if (subject) {
            const { name } = request.post()
            subject.name = name
            await subject.save()
            response.status(200).json(subject)
        } else {
            response.status(404).json(id)
        }
    }

    async destroy({ response, params: { id } }) {
        const subject = await Subject.find(id)
        if (subject) {
            await subject.delete()
            response.status(200).json(id)
        } else {
            response.status(404).json(id)
        }
    }
}

module.exports = SubjectController