const { postgresql } = require('../databases/postgresql')

/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @returns {{pk_user: 1, name: "Juan"}} User schema
 */
const createUser = async (pk_user, name) => {
    try {
        let user = await postgresql.public.one(`insert into users values (${pk_user}, '${name}', true) returning *;`);
        return user
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Update an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @param {boolean} status User status
 * @returns {{pk_user: 1, name: "Juan"}} User schema
 */
const updateUser = async (pk_user, name, status) => {
    try {
        let user = await postgresql.public.one(`update users set name = '${name}', status = ${status} where pk_user = ${pk_user} returning *;`);
        return user
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @returns {{pk_user: 1, name: "Juan"}} User schema
 */
const getUser = async (pk_user) => {

    let user = await postgresql.public.one(`select * from users where pk_user = ${pk_user}`);
    return user
}

/**
 * Delete an specific user
 * @param {number} pk_user User primary key
 * @returns {pk_user: 1} User primary key
 */
const deleteUser = (pk_user) => {

    throw new Error('Method not implemented.');
}

module.exports = {
    createUser,
    getUser,
    updateUser,
}