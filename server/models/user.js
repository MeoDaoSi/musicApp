const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name : { type : String, require: true, },
    email : { type : String, require: true, },
    imageURL : { type : String, require: true, },
    user_id : { type : String, require: true, },
    email_verified : { type : Boolean, require: true, },
    role : { type : Boolean, require: true, },
    auth_time : { type : Boolean, require: true, },
},
{timestamps : true}
);

module.exports = mongoose.model("user", UserSchema);