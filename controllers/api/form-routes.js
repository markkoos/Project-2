const router = require('express').Router();
const {Form} = require('../../models/form')

router.get('/', async(req, res) => {
    try{
        const formData = await Form.findAll();
        res.status(200).json(formData)
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;