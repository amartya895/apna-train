import mongoose from 'mongoose'

const userSchema = mongoose.Schema({

    username : {
        type : String,
        required :true,
        
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        require:true
    },
    travellers:{
        type:[],
    },
    profilePath:{
        type : String,
        required:false,
    }


});

const User = mongoose.model('User',userSchema);

export default User;