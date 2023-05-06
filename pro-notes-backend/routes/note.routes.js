const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticator } = require("../middlewares/authenticator");
const { NoteModel } = require("../models/NoteModel");

const noteRouter = express.Router();
noteRouter.use(authenticator);


noteRouter.get("/",async(req,res)=>{
    let token = req.headers.authorization
    jwt.verify(token,"raktim",async(err,decode)=>{
        try {

            let data = await NoteModel.find({user:decode.userId})
            res.send({
                data:data,
                message:"Success",
                status:1
            })
        } catch (error) {
            res.send({
                message:error.message,
                status:0
            })
        }
    
        
    })

   
   

})

noteRouter.post("/create",async(req,res)=>{


    try {
        let note = new NoteModel(req.body)
        await note.save()
        res.send({
            message:"Note created",
            status:1
        })
    } catch (error) {
        res.send({
            message:error.message,
            status:0
        })
    }



})

//update notes
noteRouter.patch("/patch/:id",async (req,res)=>{
    const id = req.params.id;
    try {
        await NoteModel.findByIdAndUpdate({_id:id},req.body)
        res.send({
            message:"Note updated",
            status:1
        })
    } catch (error) {
        res.send({
            message:error.message,
            status:0
        })
    }
    
})

//delete notes
/**
 * @info 
 * 1. You dont pass ids through headers in API request, use routing params eg: /delete/:id
 * it only for authorization/authentication and response objects
 * 
 * 2. Its best practice to provide route seperate name like /delete
 */
noteRouter.delete("/delete/:id",async(req,res)=>{

    const id = req.params.id;

    try {
        await NoteModel.findByIdAndDelete({_id:id})
        res.send({
            message:"Note deleted",
            status:1
        })
    } catch (error) {
        res.send({
            message:error.message,
            status:0
        })
    }
    
})

module.exports = {
  noteRouter,
};
