const {
  constants: { F_OK },
  promises: { access },
} = require("fs");

exports.checkFileExists = async (filePath) => {
  let fileExists;
  try {
    await access(filePath, F_OK);
    fileExists = true;
  } catch (error) {
    fileExists = false;
  }
  return fileExists;
};
