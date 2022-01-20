import mongoose from "mongoose";

const Schema = mongoose.Schema;
const  itemsDetailsSchema = new Schema({
    size: String,
    mintUID: String,
    LinkedItemID: Schema.Types.ObjectId,
    owner: { type: String, default: '' },
    claimed: { type: Boolean, default: false },
});

const itemDetailModel = mongoose.model("itemDetail",itemsDetailsSchema);

export default itemDetailModel;