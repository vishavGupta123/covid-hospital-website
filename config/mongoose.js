const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/DoctorAndPatientDatabase');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting server"));

db.once('open',function(){
    console.log('connected to database');
});

module.exports=db;