import app from './routes/routes';
import dotenv from 'dotenv';

dotenv.config()

const aPORT =  process.env.PORT;


app.listen(aPORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${aPORT}`);
});
