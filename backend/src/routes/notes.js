const {Router} = require('express');
const { route } = require('./users');
const router = Router();

const {getNotes, createNote, getNote, updateNote, deleteNote} = require('../controllers/notes.controllers');

router.route('/')
    .get(getNotes)
    .post(createNote) //guardar un nuevo dato

router.route('/:id')
    .get(getNote) //Obtener datos
    .put(updateNote) //actualizar datos
//     .patch() //actualizar una sola propiedad de un dato
    .delete(deleteNote) //eliminar datos
module.exports = router;