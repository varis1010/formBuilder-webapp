const mongoose = require('mongoose')

const url= "mongodb://localhost:27017/form-builder";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const con= mongoose.connection;
try{
  con.on('open',() => {
      console.log('connected');
  })
}catch(error)
{
  console.log("Error: "+error);
}