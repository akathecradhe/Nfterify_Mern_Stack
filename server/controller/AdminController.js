import itemModel from "../models/itemModel";
import {createItem, findAllItemsCreatedByID} from '../database/AdminDAO'


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
    // get from form
    // name,description,brandName,collectionName,
    // image,userDetailsID,sizes
    const item= req.body;

    await createItem(item);

    //sending status code to show success
    res.sendStatus(201);

};

export {create, findAll}
