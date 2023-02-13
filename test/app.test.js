const request = require("supertest");
const app = require("../app");

describe("GET /items", () => {
  it("should return a list of medical bills", async (done) => {
    const res = await request(app).get("/items");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);

    done();
  });
});

describe("POST /items", () => {
  it("should create a new medical bill", async (done) => {
    const bill = {
      patientName: "John Doe",
      patientAddress: "123 Main St",
      hospitalName: "Hospital Inc",
      dateOfService: "2022-01-01",
      billAmount: 1000,
    };

    const res = await request(app)
      .post("/items")
      .send(bill);

    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(bill);

    done();
  });
});
