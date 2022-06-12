import mongoose from "mongoose";

const schema = mongoose.Schema;

const busSchema = new schema({

    name: String,
    location : String,
    destination : String,
    time: String,
   

})

export const Bus = () => {new mongoose.model("Bus",busSchema)}