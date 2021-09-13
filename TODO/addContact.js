const { v4 } = require("uuid");

const updateContacts = require("./updateContacts");
const getContacts = require("./getContacts");

const addContact = async (name, email, phone) => {
    try {
        const contacts = await getContacts();
        const newContact = { id: v4(), name, email, phone };
        contacts.push(newContact);
        await updateContacts(contacts);
        console.log("The contact has been successfully added");
        console.table(await getContacts());
        return newContact;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = addContact;