const transactionModel = require('../models/transaction')

/**
 * Create a new transaction
 * @param {number} pk_transaction Transaction primary key
 * @param {number} fk_user User primary key
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Transaction 1", amount: 100}} Transaction schema
 */
const createTransaction = async (pk_transaction, fk_user, description, amount) => {
    try {
        return await transactionModel.createTransaction(pk_transaction, fk_user, description, amount)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Get an specific transaction
 * @param {number} pk_transaction Transaction primary key
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Transaction 1", amount: 100}} Transaction schema
 */
const getTransaction = async (pk_transaction) => {
    try {
        return await transactionModel.getTransaction(pk_transaction)
    } catch (e) {
        throw new Error(e.message)
    }
}

/** 
 * Update an specific transaction
 * @param {number} pk_transaction Transaction primary key
 * @param {number} fk_user User primary key
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Transaction 1", amount: 100}} Transaction schema
*/
const updateTransaction = async (pk_transaction, fk_user, description, amount) => {
    try {
        return await transactionModel.updateTransaction(pk_transaction, fk_user, description, amount)
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    createTransaction,
    getTransaction,
    updateTransaction
}