export default `
  type Code {
    _id: ID!
    username: String!
    code: String!
    language: String!
    start: Int
  }

  type Query {
    allCode: [Code]!
    getCode(_id: ID!): Code!
  }

  type Mutation {
    createCode(username: String!, code: String!, language: String!): Code!
  }
`