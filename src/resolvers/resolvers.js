import User from "../models/user"

const resolvers = {
    Query: {
        me: (parent, args, context, info) => User.findById('5f9b0c14543f316570bd5240'),
        user: (parent, args, context, info) => User.findById(args.id),
        users: (parent, args, context, info) => User.find()
    },
    Mutation: {
        signup: (parent, args, context, info) => {
            return User.create(args)
        }
    }
}

export default resolvers