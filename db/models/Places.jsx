import mongoose from "mongoose";

const { Schema } = mongoose;
const Placeschema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
  description: { type: String, required: true },
});

const Places = mongoose.models.Places || mongoose.model("Places", Placeschema);

export default Places;
