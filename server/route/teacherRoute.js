const express = require('express');
const { createTeacher, teacherGet } = require('../controller/teacherController');
const router = express.Router()

router.get('/', teacherGet)
router.post('/', createTeacher)
module.exports = router;