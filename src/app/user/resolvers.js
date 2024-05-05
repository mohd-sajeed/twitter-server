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
exports.resolvers = void 0;
const axios_1 = __importDefault(require("axios"));
const index_1 = require("../../clients/db/index");
const queries = {
    verifyGoogleToken: (parent_1, _a) => __awaiter(void 0, [parent_1, _a], void 0, function* (parent, { token }) {
        const googleToken = token;
        const googleOauthURL = new URL("https://oauth2.googleapis.com/tokeninfo");
        googleOauthURL.searchParams.set("id_token", googleToken);
        const { data } = yield axios_1.default.get(googleOauthURL.toString(), {
            responseType: "json",
        });
        const user = yield index_1.prismaClient.user.findUnique({
            where: { email: data.email }
        });
        if (!user) {
            yield index_1.prismaClient.user.create({
                data: {
                    email: data.email,
                    firstName: data.given_name,
                    lastName: data.family_name,
                    profileImageUrl: data.picture
                }
            });
        }
        return "ok";
    })
};
exports.resolvers = { queries };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzb2x2ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUEwQjtBQUMxQixrREFBcUQ7QUF1QnJELE1BQU0sT0FBTyxHQUFHO0lBQ1osaUJBQWlCLEVBQUUsZUFBa0QsRUFBRSxzREFBN0MsTUFBVyxFQUFFLEVBQUUsS0FBSyxFQUFxQjtRQUMvRCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDMUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQztRQUMxRSxjQUFjLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFekQsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sZUFBSyxDQUFDLEdBQUcsQ0FBb0IsY0FBYyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzNFLFlBQVksRUFBRSxNQUFNO1NBQ3ZCLENBQUMsQ0FBQTtRQUVGLE1BQU0sSUFBSSxHQUFHLE1BQU0sb0JBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzVDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO1NBQy9CLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNSLE1BQU0sb0JBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMzQixJQUFJLEVBQUU7b0JBQ0YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVU7b0JBQzFCLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVztvQkFDMUIsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPO2lCQUVoQzthQUNKLENBQUMsQ0FBQTtRQUNOLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUMsQ0FBQTtDQUNKLENBQUM7QUFFVyxRQUFBLFNBQVMsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFBIn0=