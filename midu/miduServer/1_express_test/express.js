const express = require("express");
const { middlewareData } = require("./middleware/middlewareData");
const { people } = require("../mock/people");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  if (req.url === "/") {
    middlewareData(req);
  }
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});

app.get("/people", (req, res) => {
  const { city, age } = req.query;
  if (city) {
    const peopleInCity = people.filter(
      (person) => person.city.toLowerCase() === city.toLowerCase()
    );
    return res.json(peopleInCity); // Return people in specified city
  } else if (age) {
    const peopleWithAge = people.filter(
      (person) => person.age <= parseInt(age)
    );
    return res.json(peopleWithAge);
  } else {
    return res.json(people); // Return all people if no city specified
  }
});

app.get("/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === parseInt(id));
  if (!person) {
    return res.status(404).json({ message: "Person not found" });
  }
  res.json(person);
});

app.post("/people", (req, res) => {
  const { name, age, email, city } = req.body;
  const newPerson = {
    id: people.length + 1,
    name,
    age,
    email,
    city,
  };
  people.push(newPerson);
  res.status(201).send(newPerson);
});

app.post("/", (req, res) => {
  const { body } = req;
  res.status(201).send(body);
});

app.use((req, res) => {
  res.status(404).send("Error 404");
});

app.listen(1234, () => {
  console.log("Server is running on port 1234");
});
