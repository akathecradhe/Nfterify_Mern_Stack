import itemModel from "../models/itemModel";
import {findAllItemsCreatedByID} from '../database/Database'


// fetches All the Items from the database.
const findAll = async (req, res) => {
    //url ID
    const userID = req.params.userDetailId;

    const data = findAllItemsCreatedByID(userID);

    console.log(data);
    res.json(data);

};

// Create new item to mint
const create =async (req, res) => {
    // fata form client is requested into the body
    const item= req.body;
    const newItem = new itemModel(item);
    //
    await newItem.save();

    //sending the new data to the front end to confirm that the right data is passed to backend
    res.sendStatus(201).json(item);

};

export {create, findAll}
