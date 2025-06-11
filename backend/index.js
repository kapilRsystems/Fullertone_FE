
// const fs = require("fs");
// const path = require("path");
// const connectDB = require("./config/database");
// const DataModel = require("./schema/dataSchema");

// const jsonFolder = path.join(__dirname, "jsons");

// const importJSONFiles = async () => {
//   await connectDB();

//   const files = fs.readdirSync(jsonFolder).filter(file => file.endsWith(".json"));

//   for (const file of files) {
//     const filePath = path.join(jsonFolder, file);
//     const baseName = path.parse(file).name; 
//     try {
//       const content = fs.readFileSync(filePath, "utf-8");
//       const parsed = JSON.parse(content);

//       const wrapped = {
//         Type: baseName,
//         Category: baseName,
//         Metrics: Array.isArray(parsed) ? parsed : [parsed], 
//       };

//       await DataModel.create(wrapped);
//       console.log(`Inserted: ${file}`);
//     } catch (err) {
//       console.error(`Skipped ${file}: ${err.message}`);
//     }
//   }

//   console.log("All files processed");
//   process.exit(0);
// };

// importJSONFiles();



const fs = require("fs");
const path = require("path");
const connectDB = require("./config/database");
const DataModel = require("./schema/dataSchema");

const jsonFolder = path.join(__dirname, "jsons");

const importJSONFiles = async () => {
  await connectDB();

  const files = fs.readdirSync(jsonFolder).filter(file => file.endsWith(".json"));

  for (const file of files) {
    const filePath = path.join(jsonFolder, file);
    const baseName = path.parse(file).name; 

    try {
      const content = fs.readFileSync(filePath, "utf-8");
      const parsed = JSON.parse(content);

      const key = Object.keys(parsed)[0]; 
      const testArray = parsed[key];

      for (const test of testArray) {
        const typeName = test.parameter ? test.parameter.split(" ")[0] : "Unknown";

        const doc = {
          Type: typeName,
          Category: baseName,
          ...test, 
        };

        await DataModel.create(doc);
        console.log(`Inserted: ${typeName} from ${file}`);
      }
    } catch (err) {
      console.error(`Skipped ${file}: ${err.message}`);
    }
  }

  console.log("All files processed");
  process.exit(0);
};

importJSONFiles();
