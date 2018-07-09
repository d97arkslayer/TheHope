'use strict'
const Theme = use('App/Models/Theme')
const SubjectGrade = use('App/Models/SubjectGrade')

/**
 * Resourceful controller for interacting with themes
 */
class ThemeController {
    /**
     * Show a list of all themes.
     * GET themes
     */
    async index({ response }) {
        const themes = await Theme.all()
        response.status(200).json(themes)
    }

    /**
     * Render a form to be used for creating a new theme.
     * GET themes/create
     */
    async create({ request, response, view }) {}

    /**
     * Create/save a new theme.
     * POST themes
     */
    async store({ request, response, params: { id } }) {
        const { subject_grades_id, description } = request.post()
        const subjectGrade = await SubjectGrade.find(subject_grades_id)
        if (SubjectGrade) {
            const theme = await Theme.create({ subject_grades_id, description })
            const subject = await subjectGrade.subject().fetch()
            const grade = await subjectGrade.grade().fetch()
            response.status(201).json(theme)
        }
    }

    /**
     * Display a single theme.
     * GET themes/:id
     */
    async show({ response, params: { id } }) {
        const theme = await Theme.find(id)
        if (theme) {
            const subjectGrade = await SubjectGrade.find(lesson.subject_grades_id)
            const subject = await subjectGrade.subject().fetch()
            const grade = await subjectGrade.grade().fetch()
            response.status(201).json(theme)
        }
    }

    /**
     * Render a form to update an existing theme.
     * GET themes/:id/edit
     */
    async edit({ params, request, response, view }) {}

    /**
     * Update theme details.
     * PUT or PATCH themes/:id
     */
    async update({ params, request, response }) {}

    /**
     * Delete a theme with id.
     * DELETE themes/:id
     */
    async destroy({ response, params: { id } }) {
        const theme = await Theme.find(id)
        if (theme) {
            await theme.delete()
            response.status(200).json(id)
        } else {
            response.status(404).json(id)
        }
    }
}

module.exports = ThemeController