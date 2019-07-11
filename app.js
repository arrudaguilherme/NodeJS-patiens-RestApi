const express=require('express');
const mongoose=require('mongoose'); //conexao com o DB
const requireDir=require('require-dir');
const cors =require('cors');
//Iniciando o App
const app=express();
app.use(express.json());
app.use(cors());  //dominio para qualquer acesso
//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',{useNewUrlParser:true});

requireDir('./src/models');

const Patient = mongoose.model('Patient');

//First Route

app.use('/api',require('./src/routes'));

app.listen('3000',function(){
    console.log('Server running');
});