var router=require('express').Router()
var mongoose=require('mongoose')
var Data=require('./model/data')
var url='mongodb://ramzy:12345@localhost/dataCPU'
var os=require('os')

mongoose.connect(url,{useNewUrlParser:true},()=>{
    console.log('Terhubung ke MongoDB')
})

// Post data
router.post('/data',(req,res)=>{
    new Data({
        namacpu:os.hostname(),
        tipe:os.type(),
        platform:os.platform(),
        rilis:os.release(),
        ramSisa:os.freemem(),
        ramTotal:os.totalmem()
    }).save().then((x)=>{
        res.send({sent:x})
    })
})

// Get data
router.get('/data',(req,res)=>{
    Data.find((err,result)=>{
        res.send(result)
    })
})

module.exports=router