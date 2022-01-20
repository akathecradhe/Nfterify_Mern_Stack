import itemModel from "../models/itemModel";

// fetches All the Items from the database.
const findAll = (req, res) => {

    itemModel.find({},(err, result) => {
        if(err) {
            console.log(err)
        }
        else{
            console.log(typeof(result));
            res.json(result).sendStatus(200);
        }
    })
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
