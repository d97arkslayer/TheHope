'use strict'
const Course = use('App/Models/Course')
const Grade = use('App/Models/Grade')
class CourseController {
    async index({ response }) {
        //const courses = await Course.query().where('grade_id', id).select()
        const courses = await Course.query().with('grade').fetch()
        response.status(200).json(courses)
    }

    async create() {}

    async store({ request, response, params: { id } }) {
        const { name, grade_id } = request.post()
        const course = await Course.create({ name, grade_id })
        response.status(201).json(course)
    }

    async show({ response, params: { id } }) {

        const course = await Course.query().with('grade').where('id', id).fetch()
        if (course) {
            //const grade = await course.grade().fetch()
            //console.log(grade)
            response.status(200).json(course)
        } else {
            response.status(404).json(id)
        }


    }
    async edit() {}

    async update({ request, response, params: { id } }) {
        const course = await Course.find(id)
        if (course) {
            const { name } = request.post()
            course.name = name
            await course.save()
            response.status(200).json(course)
        } else {
            response.status(404).json(id)
        }
    }


    async destroy({ response, params: { id } }) {
        const course = await Course.find(id)
        if (course) {
            await course.delete()
            response.status(200).json(id)
        } else {
            response.status(404).json(id)
        }
    }
}

module.exports = CourseController