const express = require('express');
const validateToken = require('../middlewares/validateToken');
const Todos = require('./../models/todoModel');

const todoController = express.Router();

todoController.get('/todosByUserId', validateToken, (req, res) => {
    const user_id = req.userInfo.id;
    Todos.getTodosByUser([user_id])
        .then((result) => {
            return res.status(200).json({todos: result.rows});
        });
});


module.exports = todoController;
