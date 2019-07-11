const mongoose=require('mongoose');

const Patient=mongoose.model('Patient');

 module.exports={
     async index(req,res){
         const { page = 1 }=req.query;
         const patients = await Patient.paginate({ },{ page, limit:10});
         return res.json(patients);
     },

     async store(req,res){
        const patient=await Patient.create(req.body);
        return res.json(patient);
     },

     async showId(req,res){
        const patient=await Patient.findById(req.params.id);
        return res.json(patient);
     },
     async update(req,res){
         const patient=await Patient.findByIdAndUpdate(req.params.id,req.body,{new:true});
         return res.json(patient);
     },
     async destroy(req,res){
         await Patient.findByIdAndRemove(req.params.id);
         return res.send('Paciente removido com sucesso');
     }
     

 };