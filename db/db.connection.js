const mongoose = require('mongoose');

async function initialiseDatabase(){
  try{
    await mongoose.connect(process.env['MONGO_URI']);
    console.log('Connected to database');
  }
  catch(error){
    console.log('Error connecting to database', error);
  }
}

module.exports = {initialiseDatabase};