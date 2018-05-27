'use strict'
const SubjectGrade = use('App/Models/SubjectGrade')
const Grade = use('App/Models/Grade')
const Subject = use('App/Models/Subject')
class SubjectGradeController {
    async index({ response }) {
        const subjectGrades = await SubjectGrade.all()
        response.status(200).json({
            message: "Here are yours Subjects for grade",
            data: subjectGrades
        })
    }

    async create() {}

    async store({ request, response, params: { id } }) {
        const { grade_id, subject_id } = request.post()
        const grade = Grade.find(grade_id)
        if (grade) {
            const subject = Subject.find(subject_id)
            if (subject) {
                const subjectGrade = await SubjectGrade.create({ grade_id, subject_id })
                response.status(201).json({
                    message: 'Successfully created a new Subject.',
                    data: subjectGrade
                })
            }
        }
    }

    async show({ response, params: id }) {
        const subjectGrade = await SubjectGrade.find(id)
        if (subjectGrade) {
            const grade_id = subjectGrade.grade_id
            const subject_id = subjectGrade.subject_id
            const grade = await Grade.find(grade_id)
            const subject = await Subject.find(subject_id)
            response.status(200).json({
                message: 'Here is your subject for grade.',
                data: subjectGrade
            })
        } else {
            response.status(404).json({
                message: 'Subject for grade not found.',
                data: id
            })
        }
    }

    async edit() {}

    async update() {}

    async destroy({ response, params: { id } }) {
        const subjectGrade = await SubjectGrade.find(id)
        if (subjectGrade) {
            await subjectGrade.delete()
            response.status(200).json({
                message: 'Successfully deleted this Subject for the grade.',
                id
            })
        } else {
            response.status(200).json({
                message: 'Subject for grade not found.',
                id
            })
        }
    }
}

module.exports = SubjectGradeController