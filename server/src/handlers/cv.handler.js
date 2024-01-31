const Cv = require('../models/cv.model');
const {createCvController, searchCvsController, getAllCvsController} = require('../controllers/cv.controller');

const createCvHandler = async (req,res)=>{
    try {
        const {name, image, text} = req.body;
        const cvCreate = await createCvController({name, image, text}); 
        res.status(201).json(cvCreate);
        console.log('Cv created')
    } catch (error) {
        res.status(500).json({message : error.message})        
    }
}

const getCvs = async (req,res)=>{
    const name = req.query.name
    try {
        const result = name ? await searchCvsController(name): await getAllCvsController()
    } catch (error) {
        
    }
}


module.exports = {createCvHandler, getCvs}