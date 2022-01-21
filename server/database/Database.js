import itemModel from "../models/itemModel";
import userDetailsModel from "../models/userDetailsModel";
import itemDetailModel from "../models/itemDetail";
import crypto from 'crypto';



export async function findAllItemsCreatedByID(id){
        let data;
        const userInfo = await userDetailsModel.findById(id);

        //object with IDs of all the items created by Admin
        const itemsCreated = userInfo.itemsCreated;

        //finds all the items in Created
        data = await itemModel.find(
            {'_id': { $in: itemsCreated}}
        );

        return data;
}


export async function createItem(item){
        ////ID of the current user
        //deleting the userdetailsID from body to allow it to map 1-1 withe item model
        const userdetailsID =item.userDetailsID;
        delete item.userDetailsID;

        //new item is created and added to DB
        const newItem = new itemModel(item);
        await newItem.save();
        console.log('this is the item id thats printed out'+ newItem._id) ;
        const userDetail = await userDetailsModel.findById(userdetailsID);

        //setting the itemdetail scheme
        /* @sizes= strings of all values e.g xsmall, small
           @quantities= Int value of the magnitude of each size
           @branndName= user name of the userDetail*/
        const brandName = userDetail.username;
        const sizes= Object.keys(item.sizes);
        const quantities = Object.values(item.sizes);

        for (let i = 0; i < sizes.length ; i++) {
                console.log("This is 2nd loop" + parseInt(quantities[i]))
                for(let x = 0; x < parseInt(quantities[i]);x++){
                        await setItemDetails(sizes[i],brandName,newItem._id);
                }
        }
        //add the id of the item ones minted
        // by updating the items minted array;
        await userDetailsModel.findOneAndUpdate({"_id":userdetailsID},
            { $push: { itemsCreated: [newItem._id] } });


}


async function  setItemDetails(size,brand, itemID){

        const randomString =  crypto.randomBytes(4).toString('hex');
        const mintCode = brand + randomString;
        console.log("Adding to item: ",itemID)
        const itemDetail = await new itemDetailModel({size,mintUID:mintCode,LinkedItemID:itemID});
        console.log(itemDetail);
        itemDetail.save();

}


