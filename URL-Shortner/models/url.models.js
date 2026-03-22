import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortID: {
        type:String,
        unique: true,
        required: true
    },
    redirectURL: {
        type:String,
        required: true
    },
    visitsHistory: [
        {
            timestamp: {type: Number}
        }
    ]
}, {timestamps: true});

const UrlModel = mongoose.model("url", urlSchema);

export default UrlModel;