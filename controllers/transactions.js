const transactions = require("express").Router()
const transactionsArray = require("../models/transaction")

transactions.get("/", (req, res) => {
    res.json(transactionsArray)
})

module.exports = transactions