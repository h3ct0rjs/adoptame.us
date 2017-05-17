var mongo = require('mongoose');
var Pet = require('../models/pets');

mongo.connect('localhost:27017/adoptadb');
//Sample Data
var pets = [
    new Pet({
        imagePath:'https://i.ytimg.com/vi/Jx8zYrMtdCI/maxresdefault.jpg',
        name:'Copito',
        description:'Un Gatico Fantastico',
        nvacunas:4}),
    new Pet({
        imagePath:'https://i.ytimg.com/vi/Jx8zYrMtdCI/maxresdefault.jpg',
        name:'Copito2',
        description:'Un Gatico Fantastico2',
        nvacunas:6}),
    new Pet({
        imagePath:'https://i.ytimg.com/vi/Jx8zYrMtdCI/maxresdefault.jpg',
        name:'Copito3',
        description:'Un Gatico Fantastico3',
        nvacunas:8}),
    new Pet({
        imagePath:'https://i.ytimg.com/vi/Jx8zYrMtdCI/maxresdefault.jpg',
        name:'Copito4',
        description:'Un Gatico Fantastico4',
         nvacunas:7}),
]

// insert into mongodb
var done = 0;

for(var i= 0;i<pets.length;i++){
    pets[i].save();
    done++;
    if(done === pets.length){
        exit();
    }
}

function exit(){
    mongo.disconnect();
}