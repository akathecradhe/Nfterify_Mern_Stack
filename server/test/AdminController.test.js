import {clearDatabase,closeDatabase,dbconnect} from '../database/MockDbConnection'
import {userDetails,item1,item2} from './DummyDb'
import userDetailsModel from "../models/userDetailsModel";
import {findAllItemsCreatedByID} from "../database/Database";
import itemModel from "../models/itemModel";


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
     *
     */
    it('findAllItemsCreatedByID  ', async () => {
        const createdItems = await findAllItemsCreatedByID(userDetails._id);
        expect(createdItems.length).toBe(2);
    });

})





const createUserData = async () => {
    const createUserDetails = await userDetailsModel.create(userDetails);
    await itemModel.create(item1);
    await itemModel.create(item2);
};





