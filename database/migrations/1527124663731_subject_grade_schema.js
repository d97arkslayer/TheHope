'use strict'

const Schema = use('Schema')

class SubjectGradeSchema extends Schema {
    up() {
        this.create('subject_grades', (table) => {
            table.increments()
            table.integer('grade_id').unsigned()
            table.integer('subject_id').unsigned()
            table.foreign('grade_id').references('grades.id').onDelete('CASCADE')
            table.foreign('subject_id').references('subjects.id').onDelete('CASCADE')
            table.timestamps()
        })
    }

    down() {
        this.drop('subject_grades')
    }
}

module.exports = SubjectGradeSchema