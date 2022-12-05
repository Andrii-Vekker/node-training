const express = require("express");
const router = express.Router()
const contacts = require("../../db/contacts.json");


router.get("/", (req, res) => {
    res.json(contacts)
});

router.get("/:id", (req, res) => {
    res.json(contacts)
});

router.post("/", (req, res) => {
    res.json(contacts)
});

router.put("/:id", (req, res) => {
    res.json(contacts)
});

router.delete("/:id", (req, res) => {
    res.json(contacts)
})

module.exports = router

