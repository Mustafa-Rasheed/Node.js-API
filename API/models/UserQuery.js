
// const res = require("express/lib/response");
const sql = require("./dbcrm.js");


const User = function(user) {
    // this.Supplier_id = user.Supplier_id;
    this.Supplier_name = user.Supplier_name;
    this.Supplier_cnic = user.Supplier_cnic;
    this.Supplier_company = user.Supplier_company;
    this.supplier_number = user.supplier_number;
  
    
  };

  User.getperson = result =>{
    sql.query("select * from supplier_information", (err, res) =>{
      if(err) {
        console.log("error: ", err);
        console.log("customers: ", res);


        result(null, err);
        return;
      }

      console.log("detail person : ", res);
        result(null, res);
    })
  }
  

  User.getAll = result => {
    sql.query("SELECT * FROM userdetail", (err, res) => {
      if (err) {
        console.log("error: ", err);
        console.log("customers: ", res);

        result(null, err);
        return;
      }
  
      console.log("customers: ", res);
        result(null, res);
    });
  };

  User.findById = (email, password, result) => {

    if(email === undefined || password === undefined){  
      result({ kinda: "param_undefined" }, null);
      return;
    }
   sql.query(`SELECT * FROM registration WHERE email = ${email} AND password = ${password}`, (err, res) => {
      // if (err) {
      //   console.log("error: not_found ", err);
      //   result(err, null);
      //   return;
      // }
  
      
        console.log("found customer: ",res);
         result(null,res);
         return;
      
  
      // not found Customer with the id
      // result({ kind: "not_found" }, null);
    });

 };

 User.newsupplier = (user, result) => {
  
  // sql.query("SELECT COUNT(*) AS user FROM tbl_dashboard WHERE tbl_dashboard.email = ?",[user.email], (err, res) => {
  //   if (err) {
  //     console.log("error: ", err);
  //     result(err, null);
  //     return;
  //   }
  //   var usercount =  (res[0].user);
  //   console.log(usercount);
  //   if(usercount === 0)
     const createdDate = new Date();
    {
          sql.query("INSERT INTO supplier_information SET  Supplier_name = ?, Supplier_cnic = ?, Supplier_company = ?, S_id = (SELECT UUID()), Create_Date = ?, supplier_number = ? ", 
          [user.Supplier_name, user.Supplier_cnic, user.Supplier_company,createdDate, user.supplier_number  ], (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }


          // console.log("created customer: ", { id: res1.insertId, ...user });
          result(null, { id: res.insertId, ...user });
            });
      }
      // else if(usercount > 0){
          
      //     result({ kind: "Exist" }, null);
      // }
      
    }
    // );
// };

  module.exports = User;