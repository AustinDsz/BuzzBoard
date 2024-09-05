const asyncHandler = require("express-async-handler");

const messages = require("../data/messages");
const date = new Date();
const month = date.toLocaleString('default', { month: 'long' });




const getForm = asyncHandler(async (req, res)=>{
    res.render("form");
});

const postMessagefromForm = asyncHandler(async(req, res)=>{

    messages.push({text: req.body.messageText, user: req.body.userName, added:`${date.getDate()} ${month} ${date.getFullYear()}`});
    res.redirect("..");

});


module.exports = {
    getForm,
    postMessagefromForm
};