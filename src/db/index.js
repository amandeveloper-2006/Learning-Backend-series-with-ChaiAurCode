import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`MongoDB Sucessfully connected: ${connectionInstance.connection.host}:${connectionInstance.connection.host}`);

    } catch (error) {
        console.error("mongoose connection Failed:",error);
        process.exit(1); //study about process.exit

        
    }
}

export default connectDB;