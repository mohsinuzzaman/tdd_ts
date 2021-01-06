import server from "../app";
import { default as request } from "supertest"

describe("GET / - a simple api endpoint", () => {
    it("Hello API Request", async () => {
        const result = await request(server).get("/");
        expect(result.text).toEqual("hello");
        expect(result).toEqual(200);
    });
});
