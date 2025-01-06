const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')
const {CustomError} = require('../errors/custom-error')

const getTask = asyncWrapper(async (req, res) => {

    const task = await Task.find({})
    res.json({ task })

})

const postTask = asyncWrapper(async (req, res) => {

    const task = await Task.create(req.body)
    res.json({ task })

})

const updateTask = asyncWrapper(async (req, res,next) => {
    const { id: taskID } = req.params
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    })
    // const {data:content} = req.body
    if (!task) {
        return next(CustomError( `No task found with id:${taskID}`,404))
    }
    res.status(200).json({ id: taskID, data: req.body })
})

const deleteTask = asyncWrapper(async (req, res,next) => {

    const { id: taskID } = req.params
    const task = await Task.findOneAndDelete({ _id: taskID })
    if (!task) {
        return next(CustomError( `No task found with id:${taskID}`,404))
    }
    res.json({ task })


})

const singleTask = asyncWrapper(async (req, res,next) => {

    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if (!task) {
        return next(CustomError( `No task found with id:${taskID}`,404))
        // logic by addy
        // return next()
    }
    res.json({ task })

})

module.exports = {
    getTask,
    postTask,
    updateTask,
    deleteTask,
    singleTask

}