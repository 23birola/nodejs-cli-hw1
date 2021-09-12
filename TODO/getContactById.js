const listContacts = require("./listContacts");

const getContactById = async (id) => {
    const products = await listContacts();
    const product = products.find(item => item.id === id);
    if (!product) {
        return null;
    }
    return product;
}

module.exports = getContactById;