const express = require('express');
const verify = require('../midlewareFunctions/verifyToken')
const techExplainValidation = require('../validation/TechExplainValidation')
const TechExplain = require('../model/TechExplainModel');
const mongoose = require('mongoose');
const Apps = require("../model/AppsModel");

const router = express.Router();

router.get('/', async(req,res)=>{
    // res.clearCookie('session-cookie')
    res.status(200).send(await TechExplain.find({}));
});

router.post('/', verify ,async(req,res)=>{
    // res.clearCookie('session-cookie')
    const {error} = techExplainValidation(req.body);
    if(error) return res.status(406).send(error);
    const techExp = new TechExplain({
        title: req.body.title,
        img_url: req.body.img_url,
        description: req.body.description,
        pros: req.body.pros,
        cons: req.body.cons,
        video_link: req.body.video_link
    });
    try {
        const addedTechExp = await techExp.save();
        return res.status(201).send({_id: addedTechExp._id}); 
    } catch (error) {
        return res.status(400).send({message: error})
    }
});

router.put('/update/:id', verify ,async (req , res) => {
    const id = req.params.id;
    // res.clearCookie('session-cookie')
    const updateQuery =  req.query.q;
    const method = req.query.m.toLowerCase();

    switch (updateQuery) {
        case "til":
            switch (method) {
                case "p":
                    try {
                        const updatedName = await TechExplain.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{title: req.body.title}});
                        res.status(205).send({message: `Updated ${updatedName.nModified} Documents ${updateQuery}`});
                    }catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
            }
            break;
        case "img":
            switch (method) {
                case "p":
                    try{
                        const updatedImage = await TechExplain.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{img_url: req.body.image}});
                        res.status(205).send({message: `Updated ${updatedImage.nModified} Documents ${updateQuery}`});
                    }catch (e) {
                        res.status(400).send({message: e});
                    }
                    break
            }
            break;
        case "desc":
            switch (method) {
                case "p":
                    try {
                        const updatedDesc = await TechExplain.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{description: req.body.description}});
                        res.status(205).send({message: `Updated ${updatedDesc.nModified} Documents ${updateQuery}`});
                    }catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
            }
            break;
        case "pro":
            switch (method) {
                case "i":
                    try {
                        const updatedInsertPros = await TechExplain.updateOne({_id: mongoose.mongo.ObjectID(id)},{$push:{pros: req.body.pros}});
                        res.status(205).send({message: `Updated ${updatedInsertPros.nModified} Documents ${updateQuery}`});
                    }catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
                case "p":
                    try {
                        const pName = req.body.pName;
                        const updatedPutPros = await TechExplain.updateOne({_id: mongoose.mongo.ObjectID(id),pName},{$set:{pros: req.body.pros}});
                        res.status(205).send({message: `Updated ${updatedPutPros.nModified} Documents ${updateQuery}`});
                    }catch (e) {
                        res.status(400).send({message:e})
                    }
                    break
                case "d":
                    try {
                        const updatedDeletePros = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$pull:{pros: req.body.pros}});
                        res.status(205).send({message: `Updated ${updatedDeletePros.nModified} Documents ${updateQuery}`});
                    } catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
            }
            break
        case "con":
            switch (method) {
                case "i":
                    try {
                        const updatedInsertCons = await TechExplain.updateOne({_id: mongoose.mongo.ObjectID(id)},{$push:{cons: req.body.cons}});
                        res.status(205).send({message: `Updated ${updatedInsertCons.nModified} Documents ${updateQuery}`});
                    }catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
                case "p":
                    try {
                        const cName = req.body.cName;
                        const updatedPutCons = await TechExplain.updateOne({_id: mongoose.mongo.ObjectID(id),cName},{$set:{cons: req.body.cons}});
                        res.status(205).send({message: `Updated ${updatedPutCons.nModified} Documents ${updateQuery}`});
                    }catch (e) {
                        res.status(400).send({message:e})
                    }
                    break
                case "d":
                    try {
                        const updatedDeleteCons = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$pull:{cons: req.body.cons}});
                        res.status(205).send({message: `Updated ${updatedDeleteCons.nModified} Documents ${updateQuery}`});
                    } catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
            }
            break
        case "video":
            switch (method) {
                case "p":
                    try {
                        const updatedVideo = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{video_link: req.body.video_link}});
                        res.status(205).send({message: `Updated ${updatedVideo.nModified} Documents ${updateQuery}`});
                    } catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
            }
            break;
    }
    
    // if(updateQuery !== undefined && updateQuery === "image"){
    //     try {
    //         const updatedApp = await TechExplain.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{img_url: req.body.image}});
    //         return res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
    //     } catch (error) {
    //         return res.status(400).send({message: error});
    //     }
    // }

    // if(updateQuery !== undefined && updateQuery === "description"){
    //     try {
    //         const updatedApp = await TechExplain.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{description: req.body.description}});
    //         return res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
    //     } catch (error) {
    //         return res.status(400).send({message: error});
    //     }
    // }

    // if(updateQuery !== undefined && updateQuery === "pros"){
    //     try {
    //         const updatedApp = await TechExplain.updateOne({_id: mongoose.mongo.ObjectID(id)},{$push:{pros: req.body.pros}});
    //         return res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
    //     } catch (error) {
    //         return res.status(400).send({message: error});
    //     }
    // }
    
    // if(updateQuery !== undefined && updateQuery === "cons"){
    //     try {
    //         const updatedApp = await TechExplain.updateOne({_id: mongoose.mongo.ObjectID(id)},{$push:{cons: req.body.cons}});
    //         return res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
    //     } catch (error) {
    //         return res.status(400).send({message: error});
    //     }
    // }

    // if(updateQuery !== undefined && updateQuery === "video_link"){
    //     try {
    //         const updatedApp = await TechExplain.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{video_link: req.body.video_link}});
    //         return res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
    //     } catch (error) {
    //         return res.status(400).send({message: error});
    //     }
    // }
    
});

router.delete('/delete/:id', verify ,async (req , res) => {
    // res.clearCookie('session-cookie')
    try {
        const deletedTechExp = await TechExplain.deleteOne({_id: mongoose.mongo.ObjectID(req.params.id.toString())});
        return res.status(200).send({message: `Successfully Deleted ${deletedTechExp.deletedCount} Document`});
    } catch (error) {
        return res.status(400).send({message: error})
    }
});


module.exports = router