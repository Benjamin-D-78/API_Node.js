import mongoose from "mongoose";

const Message = mongoose.Schema(
{
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    content: {type: String, required: true},
},
{
    timestamps: {createdAT: true}
}
)
export default mongoose.model("Message", Message)