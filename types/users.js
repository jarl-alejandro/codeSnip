export default `
  type User {
    _id: ID!
    name: String!
    lastname: String!
    email: String!
    password: String!
    avatar: String
  }

  type Query {
    allUser: [User]!
    getUser(_id: ID!): User!
  }

  type Mutation {
    createUser(name: String!, lastname: String!, email: String!, password: String!): User!
  }

`