export default {
  Query: {
    allCode: (parent, args, { models }) => models.Code.find(),
    getCode: (parent, args, { models }) => models.Code.findOne(args)
  },

  Mutation: {
    createCode: (parent, args, { models }) => models.Code.create(args)
  }
}