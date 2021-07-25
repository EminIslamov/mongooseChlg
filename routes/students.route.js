const { Router } = require('express')
const router = Router()
const { studentsController } = require('../controllers/students.controller')

router.get('/students', studentsController.getStudent)

router.post('/students', studentsController.addStudent)

router.delete('/students/:id', studentsController.deleteStudent)

router.patch('/students/:id', studentsController.updateStudent)

module.exports = router