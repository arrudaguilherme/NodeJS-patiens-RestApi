const mongoose=require('mongoose');
const mongoosePaginate=require('mongoose-paginate');

const PatientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    age:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});

PatientSchema.plugin(mongoosePaginate);

mongoose.model('Patient',PatientSchema);
