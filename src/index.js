import express from "express"
import server from "./server"
import connectMongoDb from "./connector/connectMongoDb"

const app = express()
const PORT = 4444
connectMongoDb()

server.applyMiddleware({ app })

app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
)
