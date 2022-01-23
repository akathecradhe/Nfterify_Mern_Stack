import itemModel from "../models/itemModel";
import userDetailsModel from "../models/userDetailsModel";
import itemDetailModel from "../models/itemDetail";


export async function mintItem(user,uid){

    //current user that we need to insert the item into And make new owner
    const userInfo = await userDetailsModel.findById(user);
    console.log("userinfo output :  " + userInfo);

    //Find the item with the uniqueID
    const itemDetail = await  itemDetailModel.findOne({mintUID:uid})

    //item to be added to user'minted
    const item = itemDetail.LinkedItemID;

    //current user that we need to insert the item into And make new owner
    await userDetailsModel.findOneAndUpdate({"_id":user},
        { $push: { itemsMinted: [item] } });

    //Change the status of the itemDetail object
    // await itemDetail.updateOne({owner:user},{claimed:true});

    itemDetail.owner= user;
    itemDetail.claimed=true;
    await itemDetail.save();


}