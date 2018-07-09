'use strict'

/**
 * Resourceful controller for interacting with words
 */
const Word = use('App/Models/Word')
const SubjectGrade = use('App/Models/SubjectGrade')
class WordController {
    /**
     * Show a list of all words.
     * GET words
     */
    async index({ request, response, view }) {
        const words = await Word.all()
        response.status(200).json(words)
    }

    /**
     * Render a form to be used for creating a new word.
     * GET words/create
     */
    async create({ request, response, view }) {}

    /**
     * Create/save a new word.
     * POST words
     */
    async store({ request, response }) {
        const { subject_grades_id, word } = request.post()
        const subjectGrade = await SubjectGrade.find(subject_grades_id)
        if (SubjectGrade) {
            const words = await Word.create({ subject_grades_id, description })
            response.status(201).json(words)
        }
    }

    /**
     * Display a single word.
     * GET words/:id
     */
    async show({ params, request, response, view }) {
        const word = await Word.find(params.id)
        if (word) {
            response.status(201).json(word)
        }
    }

    /**
     * Render a form to update an existing word.
     * GET words/:id/edit
     */
    async edit({ params, request, response, view }) {}

    /**
     * Update word details.
     * PUT or PATCH words/:id
     */
    async update({ params, request, response }) {}

    /**
     * Delete a word with id.
     * DELETE words/:id
     */
    async destroy({ params, request, response }) {
        const word = await Word.find(params.id)
        if (word) {
            await word.delete()
            response.status(200).json(id)
        } else {
            response.status(404).json(id)
        }
    }
}

module.exports = WordController