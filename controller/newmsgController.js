const asyncHandler = require("express-async-handler");

const messages = require("../data/messages");

const getForm = asyncHandler(async (req, res)=>{
    res.render("form");
});

const postMessagefromForm = asyncHandler(async(req, res)=>{

    messages.push({text: req.body.messageText, user: req.body.userName, added: new Date()});
    res.redirect("..");

});


module.exports = {
    getForm,
    postMessagefromForm
};