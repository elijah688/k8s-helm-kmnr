const { write } = require("./writeFile");
const { checkFileExists } = require("./checkFileExists");

const { resolve, join } = require("path");
const dataDirPath = resolve("data");

const handlePost = async (ctx) => {
  const { title, content, overwrite } = ctx;
  const fileName = `${title}.json`;
  const filePath = join(dataDirPath, fileName);

  const fileExists = await checkFileExists(filePath);
  const fileNotFound = !fileExists;
  const enableWrite = overwrite || fileNotFound;

  if (enableWrite) {
    write(filePath, title, content);
    return { fileCreated: true };
  }
  return { fileExists };
};
module.exports = { handlePost };
