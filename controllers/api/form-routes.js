const router = require('express').Router();
const bcrypt = require('bcrypt')
// did not work
// const {Form} = require('../../models');

const {Form} = require('../../models/form.js');

// route is api/form
router.get('/', (req, res) => {
    try{
        // searches and sends file from public folder
        res.sendFile('form.html', {root:'public'});
    }catch(err){
        res.status(500).json(err);
    }
})

// grabs data from HTML form and posts/stores it
router.post('/data', async(req, res) =>{
    const userData = req.body;
        try{
            // if(!userData.verifypassword === userData.password){
            //     prompt(`Passwords do not match.`)
            // }else{
            //     return;
            // }
            userData.password = await bcrypt.hash(req.body.password, 10);
            userData.verifypassword = await bcrypt.hash(req.body.verifypassword, 10);
            const sendData = await Form.create(userData);
            res.sendFile('form.html', {root:'public'});
        }catch(err){
            res.status(500).json(err);
        }
    // res.send(userData)
    console.log(userData); 
})


module.exports = router;