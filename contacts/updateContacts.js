const fs = require("fs/promises");
const path = require("path");

const filePath = path.join("./db/contacts.json");
console.log(filePath);

const updateContacts = async (newContacts) => {
    await fs.writeFile(filePath, JSON.stringify(newContacts));
};

module.exports = updateContacts;