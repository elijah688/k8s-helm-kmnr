const {
  promises: { writeFile },
} = require("fs");

exports.write = (filePath, title, content) => {
  const data = JSON.stringify({ title, content });
  return writeFile(filePath, data);
};
