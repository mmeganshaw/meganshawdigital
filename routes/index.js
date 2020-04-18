const express = require("express");
var path = require('path');
var app = express();

module.exports = function (app) {

    // to the home page ya'll
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "./public/index.html"));
    });

    // to the portfolio page 
    app.get("/portfolio", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/portfolio.html"));
    });

    // to the portfolio lead gen page 
    app.get("/portfolio/leads", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/portfolio-lead.html"));
    });

    // to the portfolio content page 
    app.get("/portfolio/content", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/portfolio-content.html"));
    });

    // to the webdesign content page 
    app.get("/portfolio/webdesign", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/portfolio-website.html"));
    });

    // to the webdev content page 
    app.get("/portfolio/webdev", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/portfolio-webdev.html"));
    });

    // to the about content page 
    app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/about.html"));
    });

    // to the contact content page 
    app.get("/contact", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/contact.html"));
    });
}