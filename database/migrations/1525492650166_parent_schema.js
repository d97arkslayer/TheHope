'use strict'

const Schema = use('Schema')

class ParentSchema extends Schema {
  up () {
    this.create('parents', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.string('lastName')
      table.integer('age')
      table.string('sonName')
      table.string('phone')

    })
  }

  down () {
    this.drop('parents')
  }
}

module.exports = ParentSchema
