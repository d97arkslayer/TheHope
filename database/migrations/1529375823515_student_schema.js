'use strict'

const Schema = use('Schema')

class StudentSchema extends Schema {
    up() {
        this.create('students', (table) => {
            table.increments()
            table.integer('person_id').unsigned().notNullable()
            table.foreign('person_id').references('persons.id').onDelete('CASCADE')
            table.integer('course_id').unsigned();
            table.foreign('course_id').references('courses.id')
            table.timestamps()
        })
    }

    down() {
        this.drop('students')
    }
}

module.exports = StudentSchema