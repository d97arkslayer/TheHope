'use strict'

const Schema = use('Schema')

class TaskStudentSchema extends Schema {
    up() {
        this.create('task_students', (table) => {
            table.increments()
            table.integer('student_id').unsigned().notNullable()
            table.foreign('student_id').references('students.id').onDelete('CASCADE')
            table.integer('task_id', 10).notNullable()
            table.boolean('do').default(false)
            table.string('path', 120)
            table.timestamps()
        })
    }

    down() {
        this.drop('task_students')
    }
}

module.exports = TaskStudentSchema