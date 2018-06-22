'use strict'

const Schema = use('Schema')

class ThemeSchema extends Schema {
    up() {
        this.create('themes', (table) => {
            table.increments()
            table.integer('subject_grades_id').unsigned()
            table.foreign('subject_grades_id').references('subject_grades.id').onDelete('CASCADE')
            table.string('description', 480).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('themes')
    }
}

module.exports = ThemeSchema