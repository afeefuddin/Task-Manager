const {  BSON } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const { get } = require('./route');
const Task = require('./taskmogoose');
const createTask = async (req,res)=>{
    try{
        const task = new Task();
        task.taskName = req.body.taskName;
        task.save().then(s=>{
            console.log("Data Saved");
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
            console.log(res.length);
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
    console.log(param);
    try{
        const task = await Task.findById(param)
.then(res=>{
            data.re = res;
            console.log("We are here");
            console.log(res);
        }).catch(err=>{
            console.log("Error here")
        });
        console.log(data)
        // res.status(200).json({tasks});
        console.log("Page rendered")
        res.render('task',data);
    }
    catch(error) {
        res.status(500).json({msg : error});
        console.log("Error")
    }
}
const deleteTask = async(req,res) =>{
    try{
        const tasks = await Task.findOneAndDelete({req});
        res.status(200).json({tasks});
    }
    catch(error) {
        res.status(500).json({msg : error});
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask
}