class Friend {
  constructor(id, { firstName, lastName, gender, age, language, email }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.language = language;
    this.email = email;
    this.age = age;
  }
}

const friendDB = {};

const resolver = {
  getFriend: ({ id }) => {
    return new Friend(id, friendDB[id]);
  },
  createFriend: ({ input }) => {
    let id = require("crypto")
      .randomBytes(10)
      .toString("hex");

    friendDB[id] = input;

    console.log(friendDB);

    return new Friend(id, input);
  }
};

export default resolver;
