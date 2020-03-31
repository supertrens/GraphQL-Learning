import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FriendSchema = Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  language: {
    type: String
  },
  email: {
    type: String
  },
  age: {
    type: Number
  },
  contacts: {
    type: Array
  }
});

export default mongoose.model("Friends", FriendSchema);
