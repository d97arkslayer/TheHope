'use strict'
const Subject = use('App/Models/Subject')
class SubjectController {
    async index({ response }) {
        const subjects = await Subject.all()
        response.status(200).json({
            message: 'Here are your subjects.',
            data: subjects
        })
    }

    async create() {}

    async store({ request, response, params: { id } }) {
        const { name } = request.post()
        const subject = await Subject.create({ name })
        response.status(201).json({
            message: 'Successfully created a new Subject.',
            data: subject
        })
    }

    async show({ response, params: { id } }) {
        const subject = await Subject.find(id)
        if (subject) {
            response.status(200).json({
                message: 'Here is your subject.',
                data: subject
            })
        } else {
            response.status(404).json({
                message: 'Subject not found.',
                data: id
            })
        }
    }

    async edit() {}

    async update({ request, response, params: { id } }) {
        const subject = await Subject.find(id)
        if (subject) {
            const { name } = request.post()
            subject.name = name
            await subject.save()
            response.status(200).json({
                message: 'Successfully updated this student.',
                data: subject
            })
        } else {
            response.status(200).json({
                message: 'Subject not found.',
                id
            })
        }
    }

    async destroy({ response, params: { id } }) {
        const subject = await Subject.find(id)
        if (subject) {
            await subject.delete()
            response.status(200).json({
                message: 'Successfully deleted this subject.',
                id
            })
        } else {
            response.status(200).json({
                message: 'subject not found.',
                id
            })
        }
    }
}

module.exports = SubjectController