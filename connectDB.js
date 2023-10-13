const Task = require('./taskmogoose');
const mongoose = require("mongoose")

const db = 'mongodb+srv://afeefuddin:afeefmongo04@afeefcluster.isvcpsl.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'

const connect = async (url) =>{
    return mongoose.connect(db).then(()=>console.log("Database Connected")).catch(err=>console.log("Error connecting the DB"))
}
module.exports = connect;