const userModel=require("../models/User")
const mongoose = require('mongoose');

exports.getUser=async(req,res) =>{
    try {
       const user= await userModel.find()
       res.json(user)
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"Server Error"})
    }

}

//Post user for update

exports.postUser=async(req,res)=>{
    const{title,amount}=req.body;
    try {
      const newUser=  new userModel({title,amount})
      await newUser.save()
      res.status(201).json(newUser)
    } catch (error) {
         console.error(error);
        res.status(500).json({eror:"Server Error"})
    }
}


//Update data

exports.updateUser=async(req,res)=>{
  const {title,amount}=req.body;
  const id=req.params.id;
  try{
    const updatedUser=await userModel.findByIdAndUpdate(id,req.body,{new:true})
    if(!updatedUser){
      return res.status(404).json({message:"person not found"})
    }
    res.json(updatedUser)
  }
  catch(error){
    console.error(error);
    res.status(500).json({error:"Not found server"})
  }
}


//Delete user

exports.deleteUser=async(req,res)=>{
  const id=req.params.id;

  try {
    const deleted=await userModel.findByIdAndDelete(id)
    if(!deleted)
    {
      return res.status(404).json({message:"Not found"})
    }
    res.json(deleted)
  } catch (error) {
    console.error(error);
    res.status(500).json({error:"Not found server"})

    
  }
}
