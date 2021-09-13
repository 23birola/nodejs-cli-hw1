const contacts = require("../db/contacts.json");

const listContacts = async () => {
    console.table(contacts);
    return contacts;
};

module.exports = listContacts;