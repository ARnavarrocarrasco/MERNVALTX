const {Router} = require('express');
const router = Router();

const {getUsers,createUser,getUser,updateUser,deleteUser} = require('../controllers/users.controllers');

router.route('/')
    .get(getUsers)
    .post(createUser) //guardar un nuevo dato
    
    // http://localhost:4547/api/users/1
router.route('/:id')
    .get(getUser) //Obtener datos
    .put(updateUser) //actualizar datos
    // .patch() //actualizar una sola propiedad de un dato
    .delete(deleteUser) //eliminar datos

module.exports = router;