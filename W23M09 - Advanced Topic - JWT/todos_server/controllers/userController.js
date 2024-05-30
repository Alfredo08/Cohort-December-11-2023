const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('./../models/userModel');
const validateToken = require('./../middlewares/validateToken');
const SECRET = "this_must_be_secret";

const userController = express.Router();

userController.post('/login', (req, res) => {
    const {email, password} = req.body;

    Users.getOne([email])
        .then((result) => {
            if(result.rows.length === 0){
                return res.status(404).json({message: "User not found."});
            }
            bcrypt.compare(password, result.rows[0].password)
                .then((bcryptResult) => {
                    if(! bcryptResult){
                        return res.status(400).json({message: "Invalid credentials."});
                    }

                    const payload = {
                        email: result.rows[0].email,
                        first_name: result.rows[0].first_name,
                        last_name: result.rows[0].last_name,
                        id: result.rows[0].id
                    };

                    jwt.sign(payload, SECRET, {expiresIn: '1m'}, (err, token) => {
                        if(err){
                            return res.status(400).json({message: "Something went wrong."});
                        }
                        return res.status(200).json({token});
                    });
                });
        });
});

userController.get('/verify', validateToken, (req, res) => {
   console.log(req.userInfo);
   return res.status(200).json(req.userInfo);
});


module.exports = userController;
