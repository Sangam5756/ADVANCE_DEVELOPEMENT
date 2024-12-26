import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import { app } from "../index";

describe("Test The Sum Function", () => {

    it("Should return 3 by adding 1 and 2", async () => {
        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        });
        expect(res.body.result).toBe(3);
    });

    it("Should return 0 by adding 0 and 0", async () => {
        const res = await request(app).post("/sum").send({
            a: 0,
            b: 0
        });

        expect(res.body.result).toBe(0);
    })

    it("should return -2 by adding -4 and 2",async()=>{
        const res = await request(app).post("/sum").send({
            a:-4,
            b:2
        });
        expect(res.body.result).toBe(-2)
    })

})


