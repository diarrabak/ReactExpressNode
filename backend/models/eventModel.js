import mongoose from "mongoose";

const Schema = mongoose.Schema;

//The properties of an event  and their data types
export const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  presenters: [{ type: String, required: true }],
  abstract: {
    type: String,
    required: true,
  },
  type:String,
  picture: {
    type: String,
    required: false,
  },
  place: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});
