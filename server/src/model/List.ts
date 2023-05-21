import  mongoose, {Schema} from "mongoose";

const listSchema = new Schema({
    name: String,
    amount:  Number,
    category: String,
    date: String,
})

const ListModel = mongoose.model("List", listSchema);


export default ListModel;