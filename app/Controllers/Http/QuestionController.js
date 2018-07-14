'use strict'
const Question = use('App/Models/Question')
    /**
     * Resourceful controller for interacting with questions
     */
class QuestionController {
    /**
     * Show a list of all questions.
     * GET questions
     */
    async index({ request, response, view }) {
        const questions = await Question.all()
        response.status(200).json(questions)
    }

    /**
     * Render a form to be used for creating a new question.
     * GET questions/create
     */
    async create({ request, response, view }) {}

    /**
     * Create/save a new question.
     * POST questions
     */
    async store({ request, response }) {
        const {}
    }

    /**
     * Display a single question.
     * GET questions/:id
     */
    async show({ params, request, response, view }) {}

    /**
     * Render a form to update an existing question.
     * GET questions/:id/edit
     */
    async edit({ params, request, response, view }) {}

    /**
     * Update question details.
     * PUT or PATCH questions/:id
     */
    async update({ params, request, response }) {}

    /**
     * Delete a question with id.
     * DELETE questions/:id
     */
    async destroy({ params, request, response }) {}
}

module.exports = QuestionController