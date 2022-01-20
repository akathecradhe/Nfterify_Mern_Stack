import express from 'express';
import cors from 'cors';


const app= express();

//this allows request body to be take json to be made into an object
app.use(express.json());
//all cross object referencing from front end
app.use(cors());

app.get('/', (req, res) => {
    res.json({message:'Hello World!'})
})

export default app;