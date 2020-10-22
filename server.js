const express =require('express')
const app =express()
app.get('/',(req, res)=>{

  res.send("Hi there najah")
})
app.listen(8000,()=>{
  console.log('app listening on port 8000')
})