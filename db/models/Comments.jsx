import mongoose from "mongoose";

const { Schema } = mongoose;
const commentSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  comment: { type: String, required: true },
  placeId: { type: String, required: true },
});

const Comments =
  mongoose.models.Comments || mongoose.model("Comments", commentSchema);

export default Comments;
