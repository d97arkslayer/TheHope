'use strict'
const Task = use('App/Models/Task')
const Helpers = use('Helpers')
const Resource = use('App/Models/Resource')
const Student = use('App/Models/Student')
const Class = use('App/Models/Class')
const TaskStudent = use('App/Models/TaskStudent')
class TaskController {
    async index({ response }) {
        const tasks = await Task.all()
        response.status(200).json(tasks)
    }

    async create() {}

    async store({ request, response, params: { id } }) {
        const { class_id, title, description, limitDate } = request.post()
        const task = await Task.create({ class_id, title, description, limitDate })
        const classA = await Class.find(class_id)
        const task_idi = task.id
        const course_id = classA.course_id
        const students = await Student.query().where('course_id', course_id).select()
            //console.log(students)
        for (var i in students) {
            const task_id = task_idi
            const student_id = students[i].id
            const done = false
            await TaskStudent.create({ task_id, student_id, done })
        }
        /*  if (request.file('file')) {

              const myFile = request.file('file')
              const name = new Date().getTime + '.' + myFile.subtype
              const task_id = task.id
              const resource = await Resource.create({ name, task_id })
              await myFile.move(Helpers.publicPath('uploads/tasks'), {
                  'name': name
              })
          }*/
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