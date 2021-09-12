const fs = require("fs");
const path = require("path");
const contactsOperations = require("./TODO");

// const contactsPath = path.join(__dirname, "products.json");

const workWithContacts = async (type = "listContacts", id, data) => {
    try {
        switch (type) {
            case "listContacts":
                return await contactsOperations.listContacts();
            case "getContactById":
                return await contactsOperations.getContactById(id);
            case "addContact":
                return await contactsOperations.addContact(data);
            case "removeContact":
                return await contactsOperations.removeContact(id);
        }
    }
    catch (error) {
        throw error;
    }
};

// workWithContacts("listContacts")
//     .then(data => console.log(data))
//     .catch(error => console.log(error));



// const id = 10;

// workWithContacts("getContactById", id)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

const newContact = {
    name: "Ivan",
    email: "ivan@ukr.net",
    phone: "(050) 201-1111"
};

workWithContacts("addContact", "", newContact)
    .then(data => console.log(data))
    .catch(error => console.log(error));