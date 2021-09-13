const getContacts = require("./getContacts");
// const contacts = require("../db/contacts.json");

const getContactById = async (id) => {
    const contacts = await getContacts();
    const contact = contacts.find(item => String(item.id) === String(id));
    if (!contact) {
        console.log(null);
        return null;
    }
    console.log(contact);
    return contact;
}

module.exports = getContactById;