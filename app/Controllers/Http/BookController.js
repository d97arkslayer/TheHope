'use strict'

const Book = use('App/Models/Book')

class BookController {
  async index({ response }) {
    let books = await Book.all()
    response.json(books)
  }

  async create() {
  }

  async store({ request, response }) {
    const bookInfo = request.post()

    let bookCreate = new Book()
    bookCreate.title = bookInfo.title
    bookCreate.author = bookInfo.author
    bookCreate.gender = bookInfo.gender

    await bookCreate.save()
    response.send('Ingresado correctamente')
  }

  async show({ params, response }) {
    console.log(params)
    let bookFound = await Book.find(params.id)
    if (bookFound) {
      response.status(200).json(bookFound)
    } else {
      response.status(404).json('El libro no se encuentra')
    }
  }

  async edit() {

  }

  async update({ request, response, params }) {
    let bookUpdate = await Book.find(params.id)
    if (bookUpdate) {
      const bookInfo = request.post()
      console.log(bookUpdate)
      bookUpdate.merge(bookInfo)

      await bookUpdate.save()
      response.status(200).send('Ok')
    } else {
      response.status(404).json('El libro no se encuentra')
    }

  }

  async destroy({response, params}) {
    let bookDelete = await Book.find(params.id)
    if (bookDelete) {
      await bookDelete.delete()
      response.status(200).send('Ok')
    } else {
      response.status(404).json('El libro no se encuentra')
    }
  }
}

module.exports = BookController
