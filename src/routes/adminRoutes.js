var express =require('express');
var router = express.Router();
const authenticateAdmin = require('../middleware/authentication');
const {addAdmin} = require('../controllers/queries');
router.post('/login',async(req,res)=>{
    const {username,password} = req.body;
    console.log("got data from admin login");
    try{
        const result = await authenticateAdmin(username,password);
        res.send(result);
    }catch(error){
        console.error('error:',error);
        res.status(500).send('Internal server Error');
    }
});
router.post('/add',async(req,res)=>
{
    const { username , password } = req.body;
    try{savedAdmin = await addAdmin(username,password);
        const savedAdmin = await addAdmin(username,password);
        console.log(savedAdmin);
        res.status(201).send(savedAdmin);
    }catch(error) {
     console.error('error adding admin:',error.message);
     res.status(500).send('internal server error');
    }
});
module.exports = router;