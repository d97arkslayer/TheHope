'use strict'

const Schema = use('Schema')

class QuestionsSchema extends Schema {
    up() {
        this.create('questions', (table) => {
            table.increments()
            table.integer('subject_grades_id').unsigned()
            table.foreign('subject_grades_id').references('subject_grades.id').onDelete('CASCADE')
            table.string('question')
            table.string('answer')
            table.timestamps()
        })
    }

    down() {
        this.drop('questions')
    }
}

module.exports = QuestionsSchema