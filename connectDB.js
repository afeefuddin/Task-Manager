const Task = require('./taskmogoose');
const mongoose = require("mongoose")

const db = process.env.MONGODB_URI;
let connect = async (url) =>{
    return mongoose.connect(db).then(()=>console.log("Database Connected")).catch(err=>console.log("Error connecting the DB"))
}
module.exports = connect;