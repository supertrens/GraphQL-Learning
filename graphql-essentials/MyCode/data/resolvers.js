import { Friends } from "./model";

// resolver map
export const resolvers = {
  Query: {
    getFriend: async id => {
      try {
        console.log("Here", id);
        return await Friends.findOne({ _id: id });
      } catch (err) {
        console.log(err);
      }
    }
  },

  Mutation: {
    createFriend: async (root, { input }) => {
      const { firstName, lastName, gender, language, contacts, age } = input;
      const newFriend = new Friends({
        firstName,
        lastName,
        gender,
        language,
        contacts,
        age
      });

      newFriend.id = newFriend._id;

      const savedData = await newFriend.save();
      return savedData;
    }
  }
};
