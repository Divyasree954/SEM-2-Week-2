const express = require('express');
const app = express();
const connection = require('./src/config/DBconnection');
const admin = require('./src/routes/adminRoutes');
connection();
app.use(express.json());
app.get('/',(req,res)=>
{
  console.log("HOME")
  res.send("Hello World !")
})
app.use('/auth',admin)
app.listen(PORT=5000,()=>{
  console.log("Server is running ......")
});