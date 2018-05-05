'use strict'

const Schema = use('Schema')

class BookSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()
      table.timestamps()

      table.string('title',80).notNullable().unique().defaultTo('Untitled')
      table.string('author',30).notNullable()
      table.string('gender').notNullable().defaultTo('Terror')
      
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BookSchema
