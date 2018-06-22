'use strict'
const Student = use('App/Models/Student')
const Task = use('App/Models/Task')
const TaskStudent = use('App/Models/TaskStudent')
    /**
     * Resourceful controller for interacting with taskstudents
     */
class TaskStudentController {
    /**
     * Show a list of all taskstudents.
     * GET taskstudents
     */
    async index({ request, response }) {
        const task = await TaskStudent.all()
        response.status(200).json(task)
    }

    /**
     * Render a form to be used for creating a new taskstudent.
     * GET taskstudents/create
     */
    async create({ request, response }) {}

    /**
     * Create/save a new taskstudent.
     * POST taskstudents
     */
    async store({ request, response }) {
        const { student_id, task_id, done, path } = request.post()
        const taskStudent = await TaskStudent.create({ student_id, task_id, done, path })
        response.status(200).json(taskStudent);
    }

    /**
     * Display a single taskstudent.
     * GET taskstudents/:id
     */
    async show({ params, request, response }) {}

    /**
     * Render a form to update an existing taskstudent.
     * GET taskstudents/:id/edit
     */
    async edit({ params, request, response, view }) {}

    /**
     * Update taskstudent details.
     * PUT or PATCH taskstudents/:id
     */
    async update({ params, request, response }) {
        const taskStudent = await TaskStudent.find(params.id)
        if (taskStudent) {
            const { task_id, done, path } = request.post()
            taskStudent.task_id = task_id
            taskStudent.done = done
            taskStudent.path = path
            await taskStudent.save()
            response.status(200).json(taskStudent)
        } else {
            response.status(404).json(params.id)
        }
    }

    /**
     * Delete a taskstudent with id.
     * DELETE taskstudents/:id
     */
    async destroy({ params, request, response }) {
        const taskstudent = TaskStudent.find(params.id)
        if (taskstudent) {
            await taskstudent.delete()
            response.status(200).json(id)
        } else {
            response.status(404).json(id)
        }
    }
}

module.exports = TaskStudentController