'use strict'
const Lesson = use('App/Models/Lesson')
const SubjectGrade = use('App/Models/SubjectGrade')
class LessonController {
    async index({ response }) {
        const lessons = await Lesson.all()
        response.status(200).json(lessons)
    }

    async create() {}

    async store({ request, response, params: { id } }) {
        const { subject_grades_id, description } = request.post()
        const subjectGrade = await SubjectGrade.find(subject_grades_id)
        if (SubjectGrade) {
            const lesson = await Lesson.create({ subject_grades_id, description })
            const subject = await subjectGrade.subject().fetch()
            const grade = await subjectGrade.grade().fetch()
            response.status(201).json(lesson)
        }
    }

    async show({ response, params: { id } }) {
        const lesson = await Lesson.find(id)
        if (lesson) {
            const subjectGrade = await SubjectGrade.find(lesson.subject_grades_id)
            const subject = await subjectGrade.subject().fetch()
            const grade = await subjectGrade.grade().fetch()
            response.status(201).json(lesson)
        }
    }

    async edit() {}

    async update() {}

    async destroy({ response, params: { id } }) {
        const lesson = await Lesson.find(id)
        if (lesson) {
            await lesson.delete()
            response.status(200).json(id)
        } else {
            response.status(404).json(id)
        }
    }
}

module.exports = LessonController