import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { User } from "./user"

 async function initServer() {

    const app = express()

    app.use(bodyParser.json())
    app.use(cors())

   
    const graphqlServer = new ApolloServer({
        typeDefs: `
        ${User.types}

        type Query {
           ${User.queries}
        }
        `,
        resolvers: {
            Query: {
                ...User.resolvers.queries
            },
        },
    });

    await graphqlServer.start();

    app.use('/graphql', expressMiddleware(graphqlServer))

    app.listen(8000, ()=> console.log("Server Started at  PORT 8000"))
    
    
}

initServer()