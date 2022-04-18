module.exports = app =>{
    const dashboarduser = require("../controllers/UserResponse.js");

    app.get("/mobile/showallDashboarduser/", dashboarduser.findAll);
    app.post("/mobile/userlogin/" , dashboarduser.findOne);
    app.get("/mobile/persondetail/" , dashboarduser.persongrid)
    app.post("/mobile/NewSupplierInformation/", dashboarduser.newsupplier)


}