import request from "supertest";
import express from "express";
import { describe, expect, it } from "@jest/globals";

const server = express();

server.get("/health", (_, res: express.Response) => {
  res.status(200).json({ message: "Server is running" });
});

describe("Express server", () => {
  it("Should return success message on /health", async () => {
    const res = await request(server).get("/health");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Server is running");
  });

  it("Should return 404 for a non existing route", async () => {
    const res = await request(server).get("/non-existing-route");
    expect(res.status).toBe(404);
  });
});
