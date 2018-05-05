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

Route.get('Parents','ParentController.index')
Route.get('Parents/:id','ParentController.show')
Route.post('Parents','ParentController.create')
Route.put('Parents/:id','ParentController.update')
Route.delete('Parents/:id','ParentController.delete')