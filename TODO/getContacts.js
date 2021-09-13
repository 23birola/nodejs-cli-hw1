const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join("./db/contacts.json");

const getContacts = async () => {
    try {
        const data = await fs.readFile(contactsPath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
    }
};

module.exports = getContacts;