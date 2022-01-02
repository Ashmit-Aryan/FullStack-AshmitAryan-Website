const express = require("express");
const mogoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const path = require('path')


dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const paths = __dirname+"/static"
mogoose.connect(process.env.DB_CONNECT, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});



const ImageUpload = require('./routes/image_upload');
const tech_explain = require("./routes/tech_explain");
const apps = require("./routes/apps_api");
const authRoute = require("./routes/auth");
const { dirname } = require("path");
app.use("/api/user", authRoute);
app.use("/api/apps", apps);
app.use("/api/image-upload", ImageUpload);
app.use("/api/tech-explain", tech_explain);

app.use('/query', (req,res)=>{
  res.sendFile(paths+"/query.html");
});
app.use('/', (req,res)=>{
  res.sendFile(paths+"/index.html");
});
app.use(function (req, res) {
  res.sendStatus(404);
});



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on ${port}`));
