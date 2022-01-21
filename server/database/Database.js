import itemModel from "../models/itemModel";
import userDetailsModel from "../models/userDetailsModel";



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




