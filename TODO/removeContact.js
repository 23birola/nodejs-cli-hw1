const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const removeContact = async (id) => {
    const products = await listContacts();
    const idx = products.findIndex(item => item.id === id);
    if (idx === -1) {
        return null;
    }
    products.splice(idx, 1);
    await updateContacts(products);
    return "Success remove"
}

module.exports = removeContact;