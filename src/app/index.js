"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const user_1 = require("./user");
function initServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use(body_parser_1.default.json());
        app.use((0, cors_1.default)());
        const graphqlServer = new server_1.ApolloServer({
            typeDefs: `
        ${user_1.User.types}

        type Query {
           ${user_1.User.queries}
        }
        `,
            resolvers: {
                Query: Object.assign({}, user_1.User.resolvers.queries),
            },
        });
        yield graphqlServer.start();
        app.use('/graphql', (0, express4_1.expressMiddleware)(graphqlServer));
        app.listen(8000, () => console.log("Server Started at  PORT 8000"));
    });
}
initServer();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUE2QztBQUM3QyxzREFBMkQ7QUFDM0Qsc0RBQTZCO0FBQzdCLDhEQUFvQztBQUNwQyxnREFBdUI7QUFDdkIsaUNBQTZCO0FBRTVCLFNBQWUsVUFBVTs7UUFFdEIsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUE7UUFFckIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDMUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUE7UUFHZixNQUFNLGFBQWEsR0FBRyxJQUFJLHFCQUFZLENBQUM7WUFDbkMsUUFBUSxFQUFFO1VBQ1IsV0FBSSxDQUFDLEtBQUs7OzthQUdQLFdBQUksQ0FBQyxPQUFPOztTQUVoQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxLQUFLLG9CQUNFLFdBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUM1QjthQUNKO1NBQ0osQ0FBQyxDQUFDO1FBRUgsTUFBTSxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFNUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBQSw0QkFBaUIsRUFBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO1FBRXJELEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFBO0lBR3RFLENBQUM7Q0FBQTtBQUVELFVBQVUsRUFBRSxDQUFBIn0=