'use strict'
const Task = use('App/Models/Task')
const Helpers = use('Helpers')
const Resource = use('App/Models/Resource')
class TaskController {
    async index({ response }) {
        const tasks = await Task.all()
        response.status(200).json(tasks)
    }

    async create() {}

    async store({ request, response, params: { id } }) {
        const { class_id, title, description, limitDate } = request.post()
        const task = await Task.create({ class_id, title, description, limitDate })
        console.log(request.file('file'))
        if (request.file('file')) {

            const myFile = request.file('file')
            const name = new Date().getTime + '.' + myFile.subtype
            const task_id = task.id
            const resource = await Resource.create({ name, task_id })
            await myFile.move(Helpers.publicPath('uploads/tasks'), {
                'name': name
            })
        }
        response.status(201).json(task)
    }

    async show({ response, params: { id } }) {
        const task = await Task.find(id)
        if (task) {
            response.status(201).json(task)
        } else {
            response.status(404).json(id)
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
            response.status(404).json(id)
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