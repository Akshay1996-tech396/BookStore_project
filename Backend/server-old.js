const express = require('express')

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.post('/', (req,res)=>{
  const{name,email,dob,gender,city,state,message} =req.body;
  console.log(name,email,dob,gender,city,state,message)
})

app.listen(4001,()=>{
  console.log('server running at 4001')
})