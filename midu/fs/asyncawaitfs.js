const fs = require("fs/promises");

async function readFileContent() {
  console.log("Acá");
  console.log("podemos ver");

  try {
    const text = await fs.readFile("./fs/asyncFile.txt", "utf-8");
    console.log("dentro del doc");
    console.log(text);
  } catch (error) {
    console.error("Error reading file:", error);
  }

  console.log("sigue el doc");
  console.log("terminó el doc");
}

// Execute the async function
readFileContent();
