const {Router, query} = require('express')
const m$todo = require('../modules/todo.modules')
const response = require('../helpers/response')

const TodoController = Router()

TodoController.get('/', async (req, res, next) => {
    const list = await m$todo.listTodo()

response.sendResponse(res, list)

})

/**
 * add Todo
 * @param {string} title
 * @param {string} description
 */
TodoController.get('/', async (req, res, next) => {
    const list = await m$todo.listTodo()

    response.sendResponse(res, list)
})

/**
 * Detail Todo
 */
TodoController.get('/detail', async(req, res, next) => {
    const detail = await m$todo.detailTodo(req.query.id)

    response.sendResponse(res, detail)
})


/**
 * Post Todo
 * @param {string} title
 * @param {string} description
 */
TodoController.post('/', async (req, res, next) => {
    const add = await m$todo.addTodo(req.body)
    response.sendResponse(res, add)
})

/**
 * Edit Todo
 * @param {number} id
 * @param {string} title
 * @param {string} description
 */
TodoController.put('/', async (req, res, next) => {
    const edit = await m$todo.editTodo(req.body)
    response.sendResponse(res, edit)
})

/**
 * Delete Todo
 * @param {number} id
 */
TodoController.delete('/:id', async (req, res, next) => {
    const del = await m$todo.deleteTodo(req.params.id)
    response.sendResponse(res, del)
})



module.exports = TodoController