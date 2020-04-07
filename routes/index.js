const express = require("express");

module.exports = function (app) {

    // to the home page ya'll
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "./public/index.html"));
    })
    // to the portfolio page 
    app.get("/portfolio", function (req, res) {
        res.sendFile(path.join(__dirname + "./public/portfolio.html"));
    })
    // to the blog page ya'll
    app.get("/blog", function (req, res) {
        res.sendFile(path.join(__dirname + "./public/blog.html"));
    })
    // to the home page ya'll
    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname + "./public/contact.html"));
    })

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname + "./public/index.html"));
    })
}