'use strict'
const Task = use('App/Models/Task')
class TaskController {
    async index({ response }) {
        const tasks = await Task.all()
        response.status(200).json(tasks)
    }

    async create() {}

    async store({ request, response, params: { id } }) {
        const { class_id, title, description, limitDate } = request.post()
        const task = await Task.create({ class_id, title, description, limitDate })
        response.status(201).json(task)
    }

    async show({ response, params: { id } }) {
        const task = await Task.find(id)
        if (task) {
            response.status(201).json(task)
        } else {
            response.status(404)
        }
    }

    async edit() {}

    async update({ request, response, params: { id } }) {
        const task = await Task.find(id)
        if (task) {
            const { title, description, limitDate } = request.post()
            task.title = title
            task.description = description
            task.limitDate = limitDate
            await task.save()
            response.status(201).json(task)
        } else {
            response.status(404)
        }
    }

    async destroy({ response, params: { id } }) {
        const task = await Task.find(id)
        if (task) {
            await task.delete()
            response.status(201).json(id)
        } else {
            response.status(404)
        }
    }
}

module.exports = TaskController