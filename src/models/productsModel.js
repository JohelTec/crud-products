const mySql = require('../config/connectionDb');
const moment = require('moment');
const fs = require("fs");

module.exports = {
    async getProducts() {
        try {
            var result = await mySql.query(`SELECT * FROM products`)
        } catch (err) { throw new Error(err) }

        return result;
    },
    async getProduct(_id) {
        try {
            var result = await mySql.query(`SELECT * FROM products WHERE id_product = ${_id}`)
        } catch (err) { throw new Error(err) }

        return result;
    },
    async createProduct(body) {
        try {
            var result = await mySql.query(`insert into products (name, description, price) values ('${body.name}', '${body.description}', '${body.price}')`)
        } catch (err) { throw new Error(err) }

        return result;
    },
    async updateProduct(body) {
        try {
            var result = await mySql.query(`
                UPDATE products
                SET name = '${body.name}', description = '${body.description}', price = '${body.price}'
                WHERE id_product = '${body.id_product}'
            `)
        } catch (err) { throw new Error(err) }

        return result;
    },
    async deleteProduct(body) {
        try {
            var result = await mySql.query(`
                DELETE FROM products WHERE id_product = '${body.id_product}'
            `)
        } catch (err) { throw new Error(err) }

        return result;
    },



    
    
}