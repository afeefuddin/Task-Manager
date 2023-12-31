const {  BSON ,ObjectId } = require('mongodb');
const { get } = require('./route');
const Task = require('./taskmogoose');
const { query } = require('express');
const createTask = async (req,res)=>{
    try{
        const task = new Task();
        task.taskName = req.body.taskName;
        task.save().then(s=>{
        })
        res.status(200).json({task});
    }
    catch(error){
        res.status(500).json({msg:error});
    }
}
const getAllTasks = async(req,res)=>{
    try{
        let n =5;
        let re = [];
        data = {}
        const tasks = await Task.find({}).then(res=>{
            data.n = res.length;
            data.re =res;
        }).catch(err=>{
            console.log("Error");
        })
        res.render('index',data)
        
    }
    catch(error){
        res.status(500).json({msg:error});
    }
}
const getTask = async(req,res) =>{
    let param = req.query.id;
    let data = {};
    data.id = param;
    try{
        const task = await Task.findById(param)
.then(res=>{
            data.re = res;
        }).catch(err=>{
            console.log("Error here")
        });
        console.log(data)
        // res.status(200).json({tasks});
        res.render('task',data);
    }
    catch(error) {
        res.status(500).json({msg : error});
        console.log("Error")
    }
}
const deleteTask = async(req,res) =>{
    const id = req.body.id;

    try{
        
        const tasks = await Task.findByIdAndDelete(id);

        res.status(302).json({tasks})
        }
    catch(error) {
        console.log("Error Deleteing")
        res.status(500).json({msg : error});
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask
}