const date = new Date();
const month = date.toLocaleString('default', { month: 'long' });


//messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: `${date.getDate()} ${month} ${date.getFullYear()}`
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: `${date.getDate()} ${month} ${date.getFullYear()}`
  }
];

module.exports  =  messages;