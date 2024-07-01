const express = require("express");
const app=express();
app.use(express.json());
const axios = require('axios');

app.post('/auth/otpless',async(req,res)=>{
    const {phoneNumber} =req.body;
    try{

        const respone = await axios.post('https://auth.otpless.app/auth/otp/v1/send',{
            phoneNumber,
            otpLength:6,
            channel:'WHATSAPP',
            expiry:600
        },{
            headers:{
                'Content=Type':'application/json',
                'clientId':'27CTLE6CAYCFFNSRFNRGNYEAST5D665L',
                'clientSecret':'ejp42pbfefh26ofup9afg35besklb9yu'
            }
        })
        res.json(respone.data);

    }catch(error){
        res.status(500).send('Error sending OTP');
    }
});

app.listen(3000,()=>{
    console.log('server running on port 3000');
})