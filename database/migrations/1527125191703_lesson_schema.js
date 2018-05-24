'use strict'

const Schema = use('Schema')

class LessonSchema extends Schema {
    up() {
        this.create('lessons', (table) => {
            table.increments()
            table.integer('subject_grades_id').unsigned()
            table.foreign('subject_grades_id').references('subject_grades.id').onDelete('CASCADE')
            table.string('description', 480).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('lessons')
    }
}

module.exports = LessonSchema