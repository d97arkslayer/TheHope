'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', ({ request }) => {
    return { greeting: 'Hello world in JSON' }
})

Route.resource('students', 'StudentController').apiOnly()
Route.get('book','BookController.index')

Route.post('book','BookController.store')

Route.get('book/:id','BookController.show')

Route.put('book/:id','BookController.update')

Route.delete('book/:id','BookController.destroy')