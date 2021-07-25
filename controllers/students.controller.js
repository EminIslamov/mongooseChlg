const Student = require('../models/Student.model')

module.exports.studentsController = {
  getStudent: (req, res) => {
     Student.find().then((Student) => {
       res.json(Student)
     })
  },

  addStudent: (req, res) => {
    Student.create({
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age
    }).then(() => {
      res.json("Студент добавлен")
    })
  },

  deleteStudent: (req, res) => {
    Student.findByIdAndRemove(req.params.id).then(() => {
      res.json('Deleted')
    })
  },

  updateStudent: (req, res) => {
    Student.findByIdAndUpdate(req.params.id, {$set : {...req.body}}).then(() => {
      res.send('Изменен')
    })
  }
  }
