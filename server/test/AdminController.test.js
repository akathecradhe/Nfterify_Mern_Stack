import {clearDatabase,closeDatabase,dbconnect} from '../database/MockDbConnection'
import {userDetails,item1,item2} from './DummyDb'
import userDetailsModel from "../models/userDetailsModel";
import {findAllItemsCreatedByID, createItem} from "../database/Database";
import itemModel from "../models/itemModel";
import mongoose from "mongoose";


/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => {
    await dbconnect();
});

/**
 * Seed the database.
 */
beforeEach(async () => {
    await createUserData();
});


/**
 * Clear all test data after every test.
 */
afterEach(async () => {
    await clearDatabase();
});

/**
 * Remove and close the db and server.
 */
afterAll(async () => {
    await closeDatabase();
});



describe('Api end point testing', () => {

    /**
     * Should return the correct lists of items created by admin if provided id.
     */
    it('findAllItemsCreatedByID  ', async () => {
        const createdItems = await findAllItemsCreatedByID(userDetails._id);
        expect(createdItems.length).toBe(2);
    });

    /**
     * Should return the An extra item in the the itemsCreated array
     */
    it('Create Item ', async () => {

        const idUserDetails = mongoose.Types.ObjectId('4edd40c86762e0fb12000003');
        //content from form
        const itemPOST = {
            name: "hat", description: "none", brandName: "jehucal",
            collectionName: "yellow collection", image: "googleimage99",
            userDetailsID: idUserDetails,
            sizes: {xsmall: 3, small: 2, medium: 1, large: 2, xlarge: 3,}
        }
        await createItem(itemPOST);
        const userDetail = await userDetailsModel.findById(idUserDetails);
        expect(userDetail.itemsCreated.length).toBe(3);

    })

});



const createUserData = async () => {
    const createUserDetails = await userDetailsModel.create(userDetails);
    await itemModel.create(item1);
    await itemModel.create(item2);}






