const userCtrl = {};

const User = require('../models/User');
const { param } = require('../routes/users');

userCtrl.getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users)
}

userCtrl.createUser = async (req,res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('User Created');
}
userCtrl.getUser = async (req,res) => {
    const usuario = await User.findById(req.params.id)
    console.log(usuario)
    res.json({title: 'User 1'});
}
    

userCtrl.updateUser = async (req,res) => {
    const {username} = req.body
    await User.findByIdAndUpdate(req.params.id, {
        username 
    })
    res.json({message: 'User Updated'});
}

userCtrl.deleteUser = async (req,res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({message: 'User deleted'});
}
module.exports = userCtrl;