import mongoose from "mongoose";

const User = mongoose.Schema(
{
    firstname: {type: String, minLength: 3, maxLength: 20, required: true},
    email: {type: String, required: true},
    password: {type: String, minLength: 8, required: true}
},
{
    timestamps: {createdAT: true}
}
)
export default mongoose.model("User", User)