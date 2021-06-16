const transactions = require("express").Router()
const transactionsArray = require("../models/transaction")

transactions.get("/:id", (req, res) => {
    const {id} = req.params
    transactionsArray[id] ? res.json(transactionsArray[id]) : res.redirect("/404")
})
transactions.get("/", (req, res) => {
    res.json(transactionsArray)
})

module.exports = transactions