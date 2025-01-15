const express=require('express')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

const router=express()


router.post('/candidate-signup',async(req,res)=>{
    const {Username,Password,Email,Phone}=req.body
})


module.exports=router