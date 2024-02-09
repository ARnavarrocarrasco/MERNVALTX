const notesCtrl = {};

const note = require('../models/Note');

notesCtrl.getNotes = async (req,res) => {
    const notes = await note.find(); //Devolver un arreglo con todas las notas que hay en DB
    res.json(notes);
}
notesCtrl.createNote = async (req,res) => {
    const { title, content, date, author } = req.body
    const newNote = new note({
        title: title,
        content: content,
        date: date,
        author: author
    })
    await newNote.save();
    // console.log(newNote);
    res.json({message: 'Note Saved'});
}

notesCtrl.getNote = async (req,res) => {
    const nota = await note.findById(req.params.id)
    // const note = await note.find(req.params.id);
    console.log(nota)
    res.json({title: 'Nota 1'})
}

notesCtrl.updateNote = async (req,res) => {
    const { title, content, author } = req.body
    await note.findByIdAndUpdate(req.params.id, {
        title,
        content,
        author
    })
    res.json({message: 'Note Updated'});
}
notesCtrl.deleteNote = async (req,res) => {
    await note.findByIdAndDelete(req.params.id);
    res.json({message: 'Note deleted'});
}
module.exports = notesCtrl;