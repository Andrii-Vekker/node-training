// const yargs = require("yargs");
// const {hideBin} = require("yargs/helpers") with yargs
//////////////////////////////////////////////////////////////////
const { Command } = require("commander");
const program = new Command();

const contacts = require("./contacts")

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts)
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      console.log(contact)
      break;

    case "add":
      const newBook = await contacts.addContact(name, email, phone);
      console.log(newBook)
      break;

    case "remove":
      const deleteContact = await contacts.removeCont(id);
      console.log(deleteContact)
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
 .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");
program.parse(process.argv);

const argv = program.opts();
invokeAction(argv)

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);       with yargs
// invokeAction(argv);

// invokeAction({action: "list"});
// invokeAction({action: "get", id: "1"});
// invokeAction({ action: "add", name: "1", email: "lox@emailcom", phone: "123124324" });
// invokeAction({action: "remove", id: "9"});