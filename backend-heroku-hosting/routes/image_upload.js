const router = require('express').Router();
const GridFs = require("gridfs-stream");
const mongoose = require('mongoose');
const uploadFile = require('../midlewareFunctions/uploadFile');
const verify = require('../midlewareFunctions/verifyToken');


const conn = mongoose.createConnection(process.env.DB_CONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
conn.once('open', ()=>{
    const gfs = GridFs(conn.db , mongoose.mongo);
    gfs.collection('ImageAssestData');
    console.log("Open")
})

router.get('/', async(req,res)=>{
   // res.clearCookie('session-cookie')
    const gfs = GridFs(conn.db , mongoose.mongo);
    gfs.collection('ImageAssestData');
    const files = await gfs.files.find().toArray();
    const mapedFiles = files.map((element , index , array)=>{
        if(req.hostname === "localhost"){
            return Object.assign(element , {url : `http://${req.hostname}:${process.env.PORT}/api/image-upload/${element.filename}`});
        }else{
            return Object.assign(element , {url : `https://${req.hostname}/api/image-upload/${element.filename}`});
        }
    });
    res.status(200).send({file: mapedFiles});
});

router.get('/:filename' ,async (req,res)=>{
    // res.clearCookie('session-cookie')
    const gfs = GridFs(conn.db , mongoose.mongo);
    gfs.collection('ImageAssestData');
    const a = await gfs.files.findOne({filename: req.params.filename});
    const re = gfs.createReadStream(a.filename);
    re.pipe(res);
});

router.post('/' ,verify,uploadFile.single('file') ,async (req,res)=>{
    // res.clearCookie('session-cookie')
    res.status(200).send(req.file);

});

router.delete('/delete/:id' ,verify,async (req,res)=>{
    // res.clearCookie('session-cookie')
    const gfs = GridFs(conn.db , mongoose.mongo)
    gfs.collection('ImageAssestData');
    const a = await gfs.files.deleteOne({_id: mongoose.mongo.ObjectID(req.params.id.toString())});
    res.status(204).send({message: "File Deleted Successfully"})
});

module.exports = router;