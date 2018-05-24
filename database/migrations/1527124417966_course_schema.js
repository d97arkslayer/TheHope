'use strict'

const Schema = use('Schema')

class CourseSchema extends Schema {
    up() {
        this.create('courses', (table) => {
            table.increments()
            table.string('name', 60).notNullable()
            table.integer('grade_id').unsigned()
            table.foreign('grade_id').references('grades.id').onDelete('CASCADE')
            table.timestamps()
        })
    }

    down() {
        this.drop('courses')
    }
}

module.exports = CourseSchema