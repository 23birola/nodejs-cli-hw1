const getContacts = require("./getContacts");
const updateContacts = require("./updateContacts");

const removeContact = async (id) => {
    const contacts = await getContacts();
    const idx = contacts.findIndex(item => String(item.id) === String(id));
    if (idx === -1) {
        return null;
    }
    contacts.splice(idx, 1);
    await updateContacts(contacts);
    console.log("Сontact successfully deleted!");
    console.table(await getContacts());
    return;
}

module.exports = removeContact;