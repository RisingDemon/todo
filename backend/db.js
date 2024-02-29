const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect("mongodb+srv://atharvawakade7:8oqkQ9VWSWq7Dbr5@cluster0.cedzkoe.mongodb.net/")

const todoschema=mongoose.Schema({
    title: String,
    description:String,
    completed:Boolean
})
//                (collection in db, object defn)
const todo = mongoose.model('todos',todoschema);

module.exports={
    todo
}