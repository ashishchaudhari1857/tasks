 const { json } = require('sequelize')
const Note= require('../model/note')

const   addNote=async (req, res)=>{
     try {
        const note =await Note.create({
            text:req.body.text
        })
        if(!note) return res.status(400).json({msg:"Error creating the new note"})
        return res.status(201).json(note)
     } catch (error) {

        return  res.status(404).json({message:"serve-erpor"})

     }
}

const   deleteNote=async (req, res)=>{
    const { id } = req.params;

    try {
        const note =await  Note.findOne({where:{id}})

        if(!note) return res.status(500).json({message:"note not found "})
        
        await Note.destroy({ where :{id}});
       
    } catch (error) {
        return  res.status(404).json({message:"serve-erpor"})
    }
}



const   getnote=async (req, res)=>{
    
    try {  
        const note= await Note.findAll();
        if(!note) return res.status(500).json({message:"notes not found "})
        return res.status(201).json(note)
       
    } catch (error) {
        return  res.status(404).json({message:"serve-error"})
    }
}
module.exports={
    addNote,
    getnote,
    deleteNote:deleteNote,
}