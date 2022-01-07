const express = require('express');
const Apps = require('../model/AppsModel');
const verify = require('../midlewareFunctions/verifyToken');
const appsValidation = require('../validation/AppsValidation');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', async (req, res) => {
    // res.clearCookie('session-cookie')
    res.status(200).send(await Apps.find({}));
});

router.post('/', verify ,async (req, res) => {
    // res.clearCookie('session-cookie')
    const {error} = appsValidation(req.body);
    if (error) return res.status(406).send(error);

    const app = new Apps({
        name: req.body.name,
        price: req.body.price,
        logo: req.body.logo,
        platforms: req.body.platforms,
        description: req.body.description,
        tech_stack: req.body.tech_stack,
        code: req.body.code
    });

    try {
        const adddedApps = await app.save();
        return res.status(201).send({_id: adddedApps._id});
    } catch (error) {
        return res.status(400).send({message: error});
    }
});

router.put('/update/:id',verify ,async (req, res) => {
    // res.clearCookie('session-cookie')
    const id = req.params.id;

    const updateQuery = req.query.q.toLowerCase();

    const method = req.query.m.toLowerCase();

    switch (updateQuery) {
        case "nm":
            switch (method) {
                case "p":
                    try{
                        const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{name: req.body.name}});
                        res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
                    }catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
                default:
                    res.sendStatus(404);
            }
        break;
        case "pri":
            switch (method) {
                case "p":
                    try {
                        const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{price: req.body.price}});
                         res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
                    } catch (e) {
                         res.status(400).send({message: e});
                    }
                    break;
                default:
                    res.sendStatus(404);
            }
        break;
        case "lg":
            switch (method) {
                case "p":
                    try {
                        const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{logo: req.body.logo}});
                        res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
                    } catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
                case "i":
                    try {
                        const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{logo: req.body.logo}});
                        res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
                    } catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
                default:
                    res.sendStatus(404);
            }
            break;
        case "desc":
            switch (method) {
                case "p":
                    try {
                        const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{description: req.body.description}});
                        res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
                    } catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
                case "i":
                    try {
                        const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{description: req.body.description}});
                        res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
                    } catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
                default:
                    res.sendStatus(404);
            }
            break;
        case "pf":
            switch (method) {
                case "p":
                    try {
                        const pfName = req.body.pfname;
                        const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id) , name:pfName},{$set:{"platforms.$": req.body.platforms}});
                        res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
                    } catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
                case "d":
                    try {
                        const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$pull:{platforms: req.body.platforms}});
                        res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
                    } catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
                case "i":
                    try {
                        const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$push:{platforms: req.body.platforms}});
                        res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
                    } catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
                default:
                    res.sendStatus(404);
            }
            break;
        case "ts":
            switch (method) {
                case "p":
                    try {
                        const tsName = req.body.tsname;
                        const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id) , name:tsName},{$set:{"tech_stack.$": req.body.tech_stack}});
                        res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
                    } catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
                case "d":
                    try {
                        const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$pull:{tech_stack: req.body.tech_stack}});
                        res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
                    } catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
                case "i":
                    try {
                        const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$push:{tech_stack: req.body.tech_stack}});
                        res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
                    } catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
                default:
                    res.sendStatus(404);
            }
            break;
        case "code":
            switch (method) {
                case "p":
                    try {
                        const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{code: req.body.code}});
                        res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
                    } catch (e) {
                        res.status(400).send({message: e});
                    }
                    break;
                default:
                    res.sendStatus(404);
            }
            break;
        default:
            res.sendStatus(404);
    }

    /*if(updateQuery !== undefined && updateQuery === "price"){
        try {
            const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{price: req.body.price}});
            return res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
        } catch (error) {
            return res.status(400).send({message: error});
        }
    }

    if(updateQuery !== undefined && updateQuery === "logo"){
        try {
            const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{logo: req.body.logo}});
            return res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
        } catch (error) {
            return res.status(400).send({message: error});
        }
    }

    if(updateQuery !== undefined && updateQuery === "platforms"){
        try {
            const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$push:{platforms: req.body.platforms}});
            return res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
        } catch (error) {
            return res.status(400).send({message: error});
        }
    }

    if(updateQuery !== undefined && updateQuery === "description"){
        try {
            const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{description: req.body.description}});
            return res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
        } catch (error) {
            return res.status(400).send({message: error});
        }
    }

    if(updateQuery !== undefined && updateQuery === "tech_stack"){
        try {
            const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$push:{tech_stack: req.body.tech_stack}});
            return res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
        } catch (error) {
            return res.status(400).send({message: error});
        }
    }

    if(updateQuery !== undefined && updateQuery === "code"){
        try {
            const updatedApp = await Apps.updateOne({_id: mongoose.mongo.ObjectID(id)},{$set:{code: req.body.code}});
            res.status(205).send({message: `Updated ${updatedApp.nModified} Documents ${updateQuery}`});
        } catch (error) {
            res.status(400).send({message: error});
        }
    }*/
});

router.delete('/delete/:id', verify, async (req, res) => {
    // res.clearCookie('session-cookie')
    try {
        const deletedApp = await Apps.deleteOne({_id: mongoose.mongo.ObjectID(req.params.id.toString())});
        return res.status(200).send({message: `Successfully Deleted ${deletedApp.deletedCount} Document`});
    } catch (error) {
        return res.status(400).send({message: error})
    }

});


module.exports = router;