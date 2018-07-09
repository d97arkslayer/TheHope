'use strict'

const Schema = use('Schema')

class WordSchema extends Schema {
    up() {
        this.create('words', (table) => {
            table.increments()
            table.string('word')
            table.integer('subject_grades_id').unsigned()
            table.foreign('subject_grades_id').references('subject_grades.id').onDelete('CASCADE')
            table.timestamps()
        })
    }

    down() {
        this.drop('words')
    }
}

module.exports = WordSchema