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

//Parents

Route.get('Parents', 'ParentController.index')
Route.get('Parents/:id', 'ParentController.show')
Route.post('Parents', 'ParentController.create')
Route.put('Parents/:id', 'ParentController.update')
Route.delete('Parents/:id', 'ParentController.delete')
Route.resource('students', 'StudentController').apiOnly()

//Books
Route.get('book', 'BookController.index')
Route.post('book', 'BookController.store')
Route.get('book/:id', 'BookController.show')
Route.put('book/:id', 'BookController.update')
Route.delete('book/:id', 'BookController.destroy')

//Teachers

Route.get('Teachers', 'TeacherController.index')
Route.get('Teachers/:id', 'TeacherController.show')
Route.post('Teachers', 'TeacherController.create')
Route.put('Teachers/:id', 'TeacherController.update')
Route.delete('Teachers/:id', 'TeacherController.delete')