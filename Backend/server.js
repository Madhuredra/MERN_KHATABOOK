const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const ConnectDB = require('./Database/db');


const app = express();
app.use(express.json());
app.use(express.urlencoded())
app.use(cors())

dotenv.config()

ConnectDB();


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

app.post("/", (req, res)=> {
    const { email, password} = req.body
    User.findOne({email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfully"})
                
            } if(password !== user.password) {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
})


app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd ,  You can log in now"})
            // alert("User Already Registered");
        } 
        else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                    // alert("You can move towards login");
                }
            })
        }
    })
})
    


app.listen(5000,(req,res) => {console.log(`Server started at 5000`);})