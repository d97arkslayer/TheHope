'use strict'
const Class = use('App/Models/Class')
class ClassController {
    async index({ response }) {
        const classes = await Class.all()
        response.status(200).json(classes)
    }

    async create() {}

    async store({ request, response, params: { id } }) {
        const { course_id, subject_grades_id, teacher_id } = request.post()
        const classV = await Class.create({ course_id, subject_grades_id, teacher_id })
        response.status(201).json(classV)
    }

    async show({ response, params: { id } }) {
        const classV = await Class.find(id)
        if (classV) {
            response.status(201).json(classV)
        } else {
            response.status(404)
        }
    }

    async edit() {}

    async update({ request, response, params: { id } }) {
        const classV = await Class.find(id)
        if (classV) {
            const { teacher_id } = request.post()
            classV.teacher_id = teacher_id
            await classV.save()
            response.status(200).json(classV)
        } else {
            response.status(404)
        }
    }

    async destroy({ response, params: { id } }) {
        const classV = await Class.find(id)
        if (classV) {
            await classV.delete()
            response.status(200)
        } else {
            response.status(404)
        }
    }
}

module.exports = ClassController