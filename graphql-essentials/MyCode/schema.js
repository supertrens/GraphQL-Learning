import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Friend {
    id: ID,
    firstName: String
    lastName: String
    gender: String
    language: String
    email: String
    age : Int
  }

  type Email {
    email : String
  }

  type Query {
    getFriend(id: ID) :Friend
  }

  input FriendInput {
    id: ID,
    firstName: String!
    lastName: String
    gender: String
    language: String
    email: String
    age : Int

  }

  type Mutation {
    createFriend(input: FriendInput) : Friend
  }
`);

export default schema;
