import mongoose from "mongoose";

export const connectDB = async () => {

    try{
        await mongoose.connect("mongodb+srv://saurabh:saurabh123@urlshortner.hzvzebi.mongodb.net/UrlShortner")
        .then(() => {
            console.log("MongoDB connected successfully");
        })
    }catch(err){
        console.error("Mongo conn error : ", err);
    }
    
}