import express from 'express';
import {create, findAllcreated} from '../controller/AdminController.js';
import {findAllminted,mint} from '../controller/UserController';
import cors from 'cors';

const app= express();
//this allows request body to be take json to be made into an object
app.use(express.json());
//all cross object referencing from front end
app.use(cors());


///ADMIN
//get all items
app.get('/admin/getItems/:userDetailId',findAllcreated);
//create item for minting
app.post('/createItems',create);

///User
//get all items
app.get('/user/getItems/:userDetailId',findAllminted);

//create item for minting
app.post('/mintItems',mint);

app.get('/', (req, res) => {
    res.json({message:'Hello World!'})
})

export default app;