'use strict'

const Schema = use('Schema')

class TeacherSchema extends Schema {
  up () {
    this.create('teachers', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.string('lastName')
      
    })
  }

  down () {
    this.drop('teachers')
  }
}

module.exports = TeacherSchema
