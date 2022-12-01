const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
// const { string } = require("yargs");
const contactsPath = path.join(__dirname, "db/contacts.json");

const updateContacts = async(contacts) => await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  // const id = String(contactId)  with yargs
  const contacts = await listContacts();
  // const result = contacts.find(it => it.id === id);  with yargs
  const result = contacts.find(it => it.id === contactId);
  return result || null;
};

const removeCont = async (contactId) => {
  // const id = String(contactId)  with yargs
  const contacts = await listContacts();
  // const index = contacts.findIndex(it => it.id === id);  with yargs
  const index = contacts.findIndex(it => it.id === contactId);
  if (index === -1) {
    return null
  };
  const [result] = contacts.splice(index, 1);
  //  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2)); refactoring
  await updateContacts(contacts)
  return result
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newBook = {
    id: nanoid(),
    name,
    email,
    phone
  };
  contacts.push(newBook);
  await updateContacts(contacts)
  return newBook;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeCont
};