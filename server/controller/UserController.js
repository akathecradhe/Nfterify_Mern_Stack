
import itemDetailModel from "../models/itemDetail";
import userDetailsModel from "../models/userDetailsModel";
import {createItem} from "../database/UserDAO";

/*
* list all the items minted by that user
*
* */


/*
* Enter a Mint Uid to claim an existing item error if not found
* */



const mintItem = async (req, res) => {

    const {uniqueID,currentUser}= req.body;

    await createItem(currentUser,uniqueID);

    console.log(data);

    res.json(data);
};

export default mintItem;


/*
* Enter a transfer item in user As Minted
* */