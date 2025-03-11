import * as supertest from "supertest";
const { faker } = require("@faker-js/faker");

const request = supertest("https://the-meet.com");

describe("POST /api/login", () => {
  it("should login the user ", async () => {
    const data = {
      loginemail: "akaushik@neuvays.net",
      loginpassword: "12345",
    };

    const response = await request.post("/login").send(data);
    // .set("Accept", "application/json");

    expect(response.status).toBe(200);
    // expect(response.body).toHaveProperty("id"); // Assuming the response contains an ID
    // expect(response.body.key1).toBe(requestBody.key1);
  });
});

describe("POST /register", () => {
  it("should register a user with valid data", async () => {
    const fakeUser = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      contactNo: faker.phone.number("+1##########"),
      companyName: faker.company.name(),
      designation: faker.person.jobTitle(),
      password: faker.internet.password(),
      confirmPassword: faker.internet.password(),
    };

    const response = await request
      .post("/newRegister")
      .send(fakeUser)
      .expect(200); // Adjust the expected status code if needed

    // expect(response.body).toHaveProperty(
    //   "message",
    //   "Registration successful"
    // );
  });
});

describe("POST /eventRegistration(individual)", () => {
  it("should register user with valid data and return 200", async () => {
    const payload = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      asn: faker.string.alphanumeric(10),
      address: faker.location.streetAddress(),
      logoTerms: faker.string.uuid(),
      email: faker.internet.email(),
      phone: faker.string.numeric(10), // Generates a 10-digit phone number
      organisation: faker.company.name(),
      title: faker.person.jobTitle(),
      status: "virtual",
      eventAttend: "virtual",
      comment: faker.lorem.sentence(),
      termsPrivacy: true,
      termsContact: false,
      eventName: [faker.string.uuid()], // Generating random event IDs
    };

    const response = await request.post("/eventRegistration").send(payload);
    // .set("Accept", "application/json");

    // Assertions
    expect(response.status).toBe(200);
    // expect(response.body).toHaveProperty("success", true);
    // expect(response.body).toHaveProperty(
    //   "message",
    //   "User registered successfully"
    // );
    // expect(response.body.data).toMatchObject({
    //   firstName: payload.firstName,
    //   lastName: payload.lastName,
    //   email: payload.email,
    //   phone: payload.phone,
    // });
  });

  // it("should fail when required fields are missing", async () => {
  //   const payload = {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phone: "",
  //     organisation: "",
  //     title: "",
  //     status: "",
  //     eventAttend: "",
  //     termsPrivacy: false,
  //   };

  //   const response = await request(app)
  //     .post("/register")
  //     .send(payload)
  //     .set("Accept", "application/json");

  //   // Assertions
  //   expect(response.status).toBe(400);
  //   expect(response.body).toHaveProperty("success", false);
  //   expect(response.body).toHaveProperty("message");
  //   expect(response.body.errors).toBeInstanceOf(Array);
  // });
});

describe("POST /corporateRegistration", () => {
  it("should register a user with valid data", async () => {
    const payload = {
      asn: faker.string.alphanumeric(10),
      address: faker.location.streetAddress(),
      email: faker.internet.email(),
      phone: faker.string.numeric(10), // Generates a 10-digit phone number
      organisation: faker.company.name(),
      title: faker.person.jobTitle(),
      status: "inPerson",
      eventName: [faker.string.uuid()],
      eventAttend: "inPerson",
      comment: faker.lorem.sentence(),
      termsPrivacy: true,
      termsContact: false,
      logoTerms: true,
    };

    const response = await request
      .post("/corporateRegistration") // Replace with actual endpoint
      .send(payload);
    // .set("Accept", "application/json");

    // Assertions
    expect(response.status).toBe(200); // Assuming successful registration returns 201
    // expect(response.body).toHaveProperty("message", "Registration successful");
    // expect(response.body.data).toMatchObject({
    //   asn: payload.asn,
    //   email: payload.email,
    //   organisation: payload.organisation,
    //   status: payload.status,
    //   });
    // });

    //   it("should return 400 for missing required fields", async () => {
    //     const payload = {
    //       address: faker.location.streetAddress(),
    //       phone: faker.string.numeric(10),
    //       organisation: faker.company.name(),
    //     };

    //     const response = await request(app)
    //       .post("/register")
    //       .send(payload)
    //       .set("Accept", "application/json");

    //     expect(response.status).toBe(400); // Bad Request
    //     expect(response.body).toHaveProperty("error", "Missing required fields");
  });
});

describe("POST /sponsorRegistration", () => {
  it("should register a sponsor with valid data", async () => {
    const payload = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      contact: faker.string.numeric(10), // Generates a 10-digit phone number
      jobTitle: faker.person.jobTitle(),
      seniority: faker.helpers.arrayElement([
        "Student",
        "Manager",
        "Director",
        "Executive",
      ]),
      jobFunction: faker.helpers.arrayElement([
        "E-Commerce or Digital",
        "Marketing",
        "Sales",
        "Finance",
      ]),
      websiteURL: faker.internet.url(),
      companyName: faker.company.name(),
      sponsorEventNames: [faker.string.uuid()], // Generates a fake UUID
    };

    const response = await request
      .post("/sponsorRegistration") // Replace with actual endpoint
      .send(payload);
    // .set('Accept', 'application/json');

    // Assertions
    expect(response.status).toBe(200); // Assuming successful registration returns 201
    //   expect(response.body).toHaveProperty('message', 'Registration successful');
    //   expect(response.body.data).toMatchObject({
    //     firstName: payload.firstName,
    //     lastName: payload.lastName,
    //     email: payload.email,
    //     jobTitle: payload.jobTitle,
    //     companyName: payload.companyName,
    //   });
    // });

    // it('should return 400 for missing required fields', async () => {
    //   const payload = {
    //     email: faker.internet.email(),
    //     companyName: faker.company.name()
    //   };

    //   const response = await request(app)
    //     .post('/register')
    //     .send(payload)
    //     .set('Accept', 'application/json');

    //   expect(response.status).toBe(400); // Bad Request
    //   expect(response.body).toHaveProperty('error', 'Missing required fields');
    // });

    // it('should return 400 for invalid email format', async () => {
    //   const payload = {
    //     firstName: faker.person.firstName(),
    //     lastName: faker.person.lastName(),
    //     email: 'invalid-email', // Invalid email format
    //     contact: faker.string.numeric(10),
    //     jobTitle: faker.person.jobTitle(),
    //     seniority: 'Student',
    //     jobFunction: 'E-Commerce or Digital',
    //     websiteURL: faker.internet.url(),
    //     companyName: faker.company.name(),
    //     sponsorEventNames: [faker.string.uuid()]
    //   };

    //   const response = await request(app)
    //     .post('/register')
    //     .send(payload)
    //     .set('Accept', 'application/json');

    //   expect(response.status).toBe(400);
    //   expect(response.body).toHaveProperty('error', 'Invalid email format');
  });
});

describe("POST /speakerRegistration", () => {
  it("should register a speaker with valid data", async () => {
    const payload = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      contact: faker.string.numeric(10), // Generates a 10-digit phone number
      jobTitle: faker.person.jobTitle(),
      seniority: faker.helpers.arrayElement([
        "VP Level (AVP, SVP, EVP)",
        "Manager",
        "Director",
        "Executive",
      ]),
      jobFunction: faker.helpers.arrayElement([
        "Data & Analytics",
        "Marketing",
        "Sales",
        "Finance",
      ]),
      websiteURL: faker.internet.url(),
      speakerEventNames: [faker.string.uuid()], // Generates a fake UUID for the event
      companyName: faker.company.name(),
    };

    const response = await request
      .post("/speakerRegistration") // Replace with actual endpoint
      .send(payload);
    // .set("Accept", "application/json");

    // ✅ Assertions
    //   expect(response.status).toBe(201); // Assuming successful registration returns 201
    //   expect(response.body).toHaveProperty("message", "Registration successful");
    //   expect(response.body.data).toMatchObject({
    //     firstName: payload.firstName,
    //     lastName: payload.lastName,
    //     email: payload.email,
    //     contact: payload.contact,
    //     jobTitle: payload.jobTitle,
    //     seniority: payload.seniority,
    //     jobFunction: payload.jobFunction,
    //     companyName: payload.companyName,
    //   });
    // });

    // it("should return 400 for missing required fields", async () => {
    //   const payload = {
    //     email: faker.internet.email(),
    //     contact: faker.string.numeric(10),
    //   };

    //   const response = await request(app)
    //     .post("/register")
    //     .send(payload)
    //     .set("Accept", "application/json");

    //   // ✅ Assertions
    //   expect(response.status).toBe(400); // Bad Request
    //   expect(response.body).toHaveProperty("error", "Missing required fields");
    // });

    // it("should return 400 for invalid email format", async () => {
    //   const payload = {
    //     firstName: faker.person.firstName(),
    //     lastName: faker.person.lastName(),
    //     email: "invalid-email", // Invalid email format
    //     contact: faker.string.numeric(10),
    //     jobTitle: faker.person.jobTitle(),
    //     seniority: "VP Level (AVP, SVP, EVP)",
    //     jobFunction: "Data & Analytics",
    //     websiteURL: faker.internet.url(),
    //     speakerEventNames: [faker.string.uuid()],
    //     companyName: faker.company.name(),
    //   };

    //   const response = await request(app)
    //     .post("/register")
    //     .send(payload)
    //     .set("Accept", "application/json");

    //   // ✅ Assertions
    //   expect(response.status).toBe(400);
    //   expect(response.body).toHaveProperty("error", "Invalid email format");
    // });

    // it("should return 400 for invalid phone number length", async () => {
    //   const payload = {
    //     firstName: faker.person.firstName(),
    //     lastName: faker.person.lastName(),
    //     email: faker.internet.email(),
    //     contact: faker.string.numeric(5), // Invalid phone length
    //     jobTitle: faker.person.jobTitle(),
    //     seniority: "VP Level (AVP, SVP, EVP)",
    //     jobFunction: "Data & Analytics",
    //     websiteURL: faker.internet.url(),
    //     speakerEventNames: [faker.string.uuid()],
    //     companyName: faker.company.name(),
    //   };

    //   const response = await request(app)
    //     .post("/register")
    //     .send(payload)
    //     .set("Accept", "application/json");

    //   // ✅ Assertions
    //   expect(response.status).toBe(400);
    //   expect(response.body).toHaveProperty("error", "Invalid phone number");
  });
});
