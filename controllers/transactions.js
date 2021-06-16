const transactions = require("express").Router()
const checkTypes = require("../helpers/checkTypes")
const transactionsArray = require("../models/transaction")

transactions.post("/", (req, res) => {
    const correctType = checkTypes(req.body, res)
    if (correctType) {
        transactionsArray.push(req.body)
        res.json(transactionsArray[transactionsArray.length - 1])
    }
})

transactions.put("/:id", (req, res) => {
    const {id} = req.params
    if (transactionsArray[id]) {
        const correctType = checkTypes(req.body, res)
        if (correctType) {
            transactionsArray[id] = req.body
            res.json(transactionsArray[id])
        }
    } else {
        res.redirect("/404")
    }
})

transactions.get("/:id", (req, res) => {
    const {id} = req.params
    transactionsArray[id] ? res.json(transactionsArray[id]) : res.redirect("/404")
})
transactions.get("/", (req, res) => {
    res.json(transactionsArray)
})

module.exports = transactions