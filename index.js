const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    next();
  });
   app.use(cors());

   app.get("/", (req, res) => {
    res.json({ message: "Welcome!" });
    console.log(new Date().toString());
  });

  require("./API/routes/user.js")(app)

  const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);


});