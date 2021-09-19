const getContacts = require("./getContacts");
const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const updateContacts = require("./updateContacts");
const removeContact = require("./removeContact");

module.exports = {
    getContacts,
    listContacts,
    getContactById,
    addContact,
    updateContacts,
    removeContact
}