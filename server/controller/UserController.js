

import {mintItem, findAllItemsMintedByID} from "../database/UserDAO";

/*
* Im
*
* */

const findAllminted = async (req, res) => {
    //url ID
    const userID = req.params.userDetailId;

    const data = findAllItemsMintedByID(userID);

    console.log(data);
    res.json(data);

};


/*
* Enter a Mint Uid to claim an existing item error if not found
* */

const mint = async (req, res) => {

    const {uniqueID,currentUser}= req.body;

    const data = await mintItem(currentUser,uniqueID);

   // console.log(data);

    res.json(data);
    res.sendStatus(201);
};

export  {mint,findAllminted};


/*
* Enter a transfer item in user As Minted
* */