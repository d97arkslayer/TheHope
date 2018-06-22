'use strict'

/**
 * Resourceful controller for interacting with taskstudents
 */
class TaskStudentController {
  /**
   * Show a list of all taskstudents.
   * GET taskstudents
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new taskstudent.
   * GET taskstudents/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new taskstudent.
   * POST taskstudents
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single taskstudent.
   * GET taskstudents/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing taskstudent.
   * GET taskstudents/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update taskstudent details.
   * PUT or PATCH taskstudents/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a taskstudent with id.
   * DELETE taskstudents/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TaskStudentController
