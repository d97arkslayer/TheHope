'use strict'

const Schema = use('Schema')

class ClassSchema extends Schema {
    up() {
        this.create('classes', (table) => {
            table.increments()
            table.integer('course_id').unsigned()
            table.foreign('course_id').references('courses.id').onDelete('CASCADE')
            table.integer('subject_grades_id').unsigned()
            table.foreign('subject_grades_id').references('subject_grades.id').onDelete('CASCADE')
            table.integer('teacher_id').unsigned()
            table.foreign('teacher_id').references('teachers.id').onDelete('CASCADE')
            table.timestamps()
        })
    }

    down() {
        this.drop('classes')
    }
}

module.exports = ClassSchema