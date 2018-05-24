'use strict'
const Course = use('App/Models/Course')
const Grade = use('App/Models/Grade')
class CourseController {
    async index({ response, params: { id } }) {
        const courses = await Course.query().where('grade_id', id).select()
        response.status(200).json(courses)
    }

    async create() {}

    async store({ request, response, params: { id } }) {
        const { name } = request.post()
        const grade_id = id
        const course = await Course.create({ name, grade_id })
        response.status(201).json({
            message: 'Successfully created a new course.',
            data: course
        })
    }

    async show({ response, params: { id } }) {

        const course = await Course.find(id)
        if (course) {
            const grade = await course.grade().fetch()
            console.log(grade)
            response.status(200).json({
                message: 'Here is your course.',
                data: grade.name + ' ' + course.name

            })
        } else {
            response.status(404).json({
                message: 'Course not found.',
                data: id
            })
        }


    }
    async edit() {}

    async update({ request, response, params: { id } }) {
        const course = await Course.find(id)
        if (course) {
            const { name } = request.post()
            course.name = name
            await course.save()
            response.status(200).json({
                message: 'Successfully updated this course.',
                data: course
            })
        } else {
            response.status(200).json({
                message: 'Course not found.',
                id
            })
        }
    }


    async destroy({ response, params: { id } }) {
        const course = await Course.find(id)
        if (course) {
            await course.delete()
            response.status(200).json({
                message: 'Successfully deleted this course.',
                id
            })
        } else {
            response.status(200).json({
                message: 'Course not found.',
                id
            })
        }
    }
}

module.exports = CourseController