const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../../server");
chai.should();
chai.use(chaiHttp);

describe("Customers API", () => {
  let token;

  beforeAll(async () => {
    const response = await chai
      .request(app)
      .post("/api/login")
      .send({ email: "jaemin@gmail.com", password: "admin123" });
    token = response.body.token;
  });

  describe("Customer Test", () => {
    it("It should not return users as it has no or it has invalid access token", async () => {
      const response = await chai.request(app).get("/api/customer");
      expect(response.statusCode).toEqual(401);
      expect(response.body.message).toBe("You need to login first.");
    });

    it("It should return all the customers", async () => {
      const response = await chai
        .request(app)
        .get("/api/customer")
        .set("Authorization", token);
      expect(response.statusCode).toEqual(200);
    });

    it("It should not add a customer as it has no access token", async () => {
      const response = await chai.request(app).post("/api/customer/add").send({
        firstname: "Jaemin",
        lastname: "Na",
        contact: "+639268186409",
        address: "Javier Subd"
      });
      expect(response.statusCode).toEqual(401);
      expect(response.body.message).toBe("You need to login first.");
    });

    it("It should add a customer", async () => {
      const response = await chai
        .request(app)
        .post("/api/customer/add")
        .set("Authorization", token)
        .send({
          firstname: "Jaemin",
          lastname: "Na",
          contact: "+639268186409",
          address: "Javier Subd"
        });
      expect(response.statusCode).toEqual(200);
    });

    it("It should not return customer's details by id as it has no access token", async () => {
      const response = await chai.request(app).get("/api/customer/view/2");
      expect(response.statusCode).toEqual(401);
      expect(response.body.message).toBe("You need to login first.");
    });

    it("It should return customer's details by id", async () => {
      const response = await chai
        .request(app)
        .get("/api/customer/view/2")
        .set("Authorization", token);
      expect(response.statusCode).toEqual(200);
    });

    it("It should not update a customer as it has no access token", async () => {
      const response = await chai
        .request(app)
        .put("/api/customer/edit/89")
        .send({
          firstname: "Jeno",
          lastname: "Lee",
          contact: "+639268186409",
          address: "Javier Subd"
        });
      expect(response.statusCode).toEqual(401);
      expect(response.body.message).toBe("You need to login first.");
    });

    it("It should update a customer", async () => {
      const response = await chai
        .request(app)
        .put("/api/customer/edit/89")
        .set("Authorization", token)
        .send({
          firstname: "Jeno",
          lastname: "Lee",
          contact: "+639268186409",
          address: "Javier Subd"
        });
      expect(response.statusCode).toEqual(200);
    });

    it("It should not deactivate the customer as it has no access token", async () => {
      const response = await chai.request(app).patch("/api/customer/delete/26");
      expect(response.statusCode).toEqual(401);
      expect(response.body.message).toBe("You need to login first.");
    });

    it("It should deactivate the customer", async () => {
      const response = await chai
        .request(app)
        .patch("/api/customer/delete/26")
        .set("Authorization", token);
      expect(response.statusCode).toEqual(200);
      expect(response.body.message).toBe("Customer Deleted Successfully");
    });


  });
});

// test (another approach)

// it("should throw blablah", async () => {
//   const info = {
//       data1 : id,
//       data2 : null
//   }

//   await entityName(info)
//   .then(res => {
//       console.log(res)
//       expect(res).to.not.be.true
//   })
//   .catch((err) => {
//       expect(err).to.not.be.undefined
//       expect(err).to.have.property("message")
//       expect(err.message).to.eql("data2 is required.")
//   })
// })