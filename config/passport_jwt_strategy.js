const passport=require('passport');

const JWTStrategy=require('passport-jwt').Strategy;

const ExtractJWT=require('passport-jwt').ExtractJwt;
const Doctor=require('../Model/doctor');

let opts={
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:'doctor'
}


passport.use(new JWTStrategy(opts,function(jwtPayload,done){
    Doctor.findById(jwtPayload._id,function(err,doctor){
        if(err){
            console.log("error in finding doctor ");
            return;
        }
        if(doctor){
            return done(null,doctor);
        }
        else{
            return done(null,false);
        }
    })
}));

module.exports=passport;
