import mongoose from "mongoose";
import { User } from "./user.models";
const todoSchema = new mongoose.Schema({
    content :{
        type:String,
        required : true
    },
    complate :{
        type : Boolean,
        default : false
    },
    createdBy :{
        type : mongoose.Schema.Types.ObjectId,
        ref :'User' 
    },
    subTodos :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref :'SubTodo'
        }
    ]
}, { timestamps: true });

export const Todo = mongoose.model("Todo", todoSchema);
