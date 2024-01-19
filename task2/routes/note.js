const express =require('express');
  const router = express.Router();
  const noteController = require('../controller/note')




  router.post('/post' , noteController.addNote)
  router.delete('/delete/:id' , noteController.deleteNote)
  router.get('/' , noteController.getnote)


  module.exports =router;