const path = require('path')
const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const GridFs = require("gridfs-stream");
const mongoose = require('mongoose');

const storage = new GridFsStorage({
    url: process.env.DB_CONNECT,
    file: (req, file) => {
      return new Promise((resolve,reject)=>{
        crypto.randomBytes(16 , (err,buf)=>{
          if(err){
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'ImageAssestData'
          };
          resolve(fileInfo);
        });
      });
    }
  });


const upload = multer({ storage });
let gfs;
const conn = mongoose.createConnection(process.env.DB_CONNECT, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

conn.once('open' , ()=>{
  gfs = GridFs(conn.db , mongoose.mongo);
  gfs.collection('ImageAssestData');
});

module.exports = upload;

