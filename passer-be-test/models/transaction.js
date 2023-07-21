const { postgresql } = require('../databases/postgresql')

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
        let transaction = await postgresql.public.one(`insert into transaction values (${pk_transaction}, ${fk_user}, '${description}', ${amount}) returning *;`);
        return transaction
    } catch (e) {
        throw new Error(e)
    }
}

/**
 * Get an specific transaction
 * @param {number} pk_transaction Transaction primary key
 * @returns {{pk_transaction: 1, fk_user: 1, description: "Transaction 1", amount: 100}} Transaction schema
 */
const getTransaction = async (pk_transaction) => {
    try {
        let transaction = await postgresql.public.one(`select * from transaction where pk_transaction = ${pk_transaction};`);
        return transaction
    } catch (e) {
        throw new Error(e)
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
        let transaction = await postgresql.public.one(`update transaction set fk_user = ${fk_user}, description = '${description}', amount = ${amount} where pk_transaction = ${pk_transaction} returning *;`);
        return transaction
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = {
    createTransaction,
    getTransaction,
    updateTransaction
}