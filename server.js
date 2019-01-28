var express=require('express')
var route=require('./route')
var app=express()
app.use(route)

app.get('/',(req,res)=>{
    res.send(
    `<h1>Express MongoDB Ujian Soal 2</h1>
    <h5>Use Postman to post data</h5>
    <h5>Go to /data to GET</h5>`
    )
})

app.listen(3332,()=>{console.log('Server Jalan di Port 3332')})