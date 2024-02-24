const express= require('express')

var app= express();

app.get('/',function(req,res)
{
    res.send("start server")
})

app.get('/form', function(req,res)
{
    res.sendFile(__dirname+'/form.html')
})

var bodyParser= require('body-parser')

var urlEncoded= bodyParser.urlencoded({extended:false})

app.post('/submitform',urlEncoded,function(req,res){
    res.json("data submitted:- First Name:"+req.body.fname+",Last Name:"+req.body.lname+",Email:"+req.body.email+",Password:"+req.body.password+".")
})

var server= app.listen(7000, function()
{
    var host = server.address().address 
    var port = server.address().port 
})