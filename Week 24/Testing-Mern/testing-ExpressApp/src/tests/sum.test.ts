import { describe, expect, test, it } from "@jest/globals"
import request from "supertest"
import { app } from "../index"

describe('post /sum', () => {

  it("it should return the sum of two numbers", async () => {
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(3);
  });

  it("it should return the sum of two negative numbers", async () => {

    const res = await request(app).post("/sum").send({
      a: -1,
      b: -2
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(-3);

  });

  it("it should return sum of two 0 numbers", async () => {

    const res = await request(app).post("/sum").send({
      a: 0,
      b: 0
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(0);
  })

})
