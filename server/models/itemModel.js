import mongoose from "mongoose";

const Schema = mongoose.Schema;
const  itemsSchema = new Schema({
    name: String,
    description: String,
    collectionName: String,
    brandName: String,
    image: String,
    sizes: Object,
    //TODO: ADD time made
});

const itemModel = mongoose.model("item",itemsSchema);

export default itemModel;
