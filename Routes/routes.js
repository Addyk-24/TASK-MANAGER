const express = require('express')
const router = express.Router()


const {
    getTask,
    postTask,
    updateTask,
    deleteTask,
    singleTask
} = require('../route-controller/controller')


router.route('/').get(getTask).post(postTask)
router.route('/:id').patch(updateTask).delete(deleteTask).get(singleTask)

module.exports = router
