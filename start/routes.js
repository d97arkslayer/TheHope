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


//Students 
Route.resource('students', 'StudentController').apiOnly()
    //Teachers
Route.resource('teachers', 'TeacherController').apiOnly()
    //Grades
Route.resource('grades', 'GradeController').apiOnly()
    //Students
Route.resource('courses', 'CourseController').apiOnly()
    //Subjects 
Route.resource('subjects', 'SubjectController').apiOnly()
    //Subject for grade
Route.resource('subjectGrades', 'SubjectGradeController').apiOnly()
    //Lessons
Route.resource('themes', 'ThemeController').apiOnly()
    //Classes
Route.resource('classes', 'ClassController').apiOnly()
    //Tasks
Route.resource('tasks', 'TaskController').apiOnly()
    //Students
Route.resource('students', 'StudentController').apiOnly()
    //TaskStudents
Route.resource('taskStudents', 'TaskStudentController').apiOnly()
    /*
    Route.get('Teachers', 'TeacherController.index')
    Route.get('Teachers/:id', 'TeacherController.show')
    Route.post('Teachers', 'TeacherController.create')
    Route.put('Teachers/:id', 'TeacherController.update')
    Route.delete('Teachers/:id', 'TeacherController.delete')
    */