import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_STRING = process.env.DB_STRING;

const connection = mongoose.createConnection(DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const UserSchema = new mongoose.Schema({
    username: String,
    salt: String,
    hash: String,
    admin: Boolean
});

const User = connection.model("User", UserSchema);

export default connection;