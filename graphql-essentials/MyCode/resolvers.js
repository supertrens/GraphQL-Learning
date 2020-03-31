class Friend {
  constructor(
    id,
    { firstName, lastName, gender, age, language, email, contacts }
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.language = language;
    this.email = email;
    this.age = age;
    this.contacts = contacts;
  }
}

const friendDB = {};

// resolver map
export const resolver = {
  Query: {
    getFriend: ({ id }) => {
      return new Friend(id, friendDB[id]);
    }
  },

  Mutation: {
    createFriend: ({ input }) => {
      let id = require("crypto")
        .randomBytes(10)
        .toString("hex");

      friendDB[id] = input;

      console.log(friendDB);

      return new Friend(id, input);
    }
  }
};

export default resolver;
