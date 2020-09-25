const HttpStatus = require('http-status-codes');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dbConfig = require('../config/secretKeys');
const productsModel = require('../models/productsModel');

module.exports = {
    async getByProducts(req, res){
        const result = await productsModel.getProducts();
        if (result.length > 0) {
            return res.status(HttpStatus.OK)
                .json({ message: 'Los productos fueron encontrados', data: result });
        } else {
            return res.status(HttpStatus.CONFLICT)
                .json({ message: 'Tenemos problemas para encontrar la data' });
        }
    },
    async getProduct(req, res){
        const result = await productsModel.getProduct(req.params.id);
        if (result.length > 0) {
            return res.status(HttpStatus.OK)
                .json({ message: 'Producto encontrado', data: result });
        } else {
            return res.status(HttpStatus.CONFLICT)
                .json({ message: 'Tenemos problemas para encontrar la data' });
        }
    },
    async createProduct(req, res){
        const result  = await productsModel.createProduct(req.body);
        if(result.affectedRows > 0){
            return res.status(HttpStatus.OK)
                .json({ message: 'Se ha creado el producto exitosamente'});
        }else{
            return res.status(HttpStatus.CONFLICT)
                .json({ message: 'Tenemos problemas crear el producto' });
        }
    },
    async updateProduct(req, res){
        const result = await productsModel.updateProduct(req.body);
        if(result.affectedRows > 0){
            return res.status(HttpStatus.OK)
                .json({ message: 'Se ha actualizado el producto exitosamente'});
        }else{
            return res.status(HttpStatus.CONFLICT)
                .json({ message: 'Tenemos problemas para actualizar el producto'});
        }
    },
    async deleteProduct(req, res){
        const result = await productsModel.deleteProduct(req.body);
        if(result.affectedRows > 0){
            return res.status(HttpStatus.OK)
                .json({ message: 'Se ha eliminado el producto exitosamente'});
        }else{
            return res.status(HttpStatus.CONFLICT)
                .json({ message: 'Tenemos problemas para eliminar el producto'});
        }
    },

}