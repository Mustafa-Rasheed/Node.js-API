
const User = require("../models/UserQuery.js");
const globel = require("../config/message");
// const res = require("express/lib/response");

 exports.findAll = (req, res) => {
    User.getAll((err, data) => {
      if (err)
        res.status(500).send({
          response:null,
            status: globel.statusfalse,
            httpstatus: 500,
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send({httpstatus: 200, status: globel.statustrue, message: globel.messagesucess , count: data.length, response: data});
    });
  };

  exports.persongrid =(req,res) =>{
    User.getperson((err, data) =>{
      if(err)
      res.status(500).send({
        response:null,
        status: globel.statusfalse,
        httpstatus: 500,
        message:
        err.message || "Some error occurred while retrieving customers."
      });
      else res.send({httpstatus: 200, status: globel.statustrue, message: globel.messagesucess , count: data.length, response: data});
    })
  }

  exports.findOne = (req, res) => {
    var email= JSON.stringify(req.body.email);
    var password = JSON.stringify(req.body.password);
    User.findById(email , password, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(200).send({
              response:null,
            status: globel.statusfalse,
            httpstatus: 200,
            message: `Email or Password not Exist.`
            });
          }
          else if (err.kind === "param_undefined") {
            res.status(500).send({
            response:null,
            status: globel.statusfalse,
            httpstatus: 200,
            message: `Param undefined.`
            });
          }  
          
          else {
            res.status(500).send({
            response:null,
            status: globel.statusfalse,
            httpstatus: 500,
            message: "Error retrieving Customer with id " + email
            });
          }
         
        } else res.send({httpstatus: 200,email:email, status: globel.statustrue, message: globel.messagesucess , count: data.length, response: data});
      });
  };

  exports.newsupplier = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        response:null,
            status: globel.statusfalse,
            httpstatus: 400,
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    
  // Save Customer in the database
    User.newsupplier(new User(req.body), (err, data) => {
      console.log('req...', req.body)
      if (err){
        if (err.kind === "Exist") { 
          res.status(200).send({
            response:null,
            status: globel.statusfalse,
            httpstatus: 200,
            message: `User already Exist .`
          });
        } 
      }else res.send({httpstatus: 200, status: globel.statustrue, message: globel.messagesucess , count: data.length, response: data});
    });
  };