const express=require('express');

const router=express.Router();
const doctorApi=require('../../controller/api/doctor_api_controller');

router.post('/register',doctorApi.register);
router.post('/login',doctorApi.login);

module.exports=router;