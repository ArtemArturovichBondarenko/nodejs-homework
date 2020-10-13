const uuid = require("uuid");
const mime = require("mime-types");

const generateFilename = (mimeType) => {
  return `${uuid()}.${mime.extension(mimeType)}`;
};

module.exports = generateFilename;
