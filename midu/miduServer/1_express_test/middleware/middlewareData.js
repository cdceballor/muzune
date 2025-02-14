export const middlewareData = (req) => {
  const newBody = {
    name: "Cristian",
    age: 30,
    city: "Barcelona",
  };
  if (req.method === "POST") {
    req.body = newBody;
  }
};
