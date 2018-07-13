var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');
var formidable = require('formidable');
var fs = require('fs');
var app = express();
 
app.use(cors());
app.use(bodyParser.json());
var db= {
    name: "user",
    password: "user"
}
var db1= {
    name: "admin",
    password: "admin"
}


 var input = {};

app.post('/userdetail', function(req, res) {  
   
   // input=req.body
console.log(req.body.type);
console.log(req.body.description);
 input1={ProductType:req.body.type, ProductDescription:req.body.description};

res.send(input1);

});

app.post('/user', function(req, res) {  
   
   // input=req.body
console.log(req.body.productType);
console.log(req.body.password);
 input={name:req.body.name, password:req.body.password};
if((db.name==req.body.name && db.password==req.body.password) || (db1.name==req.body.name && db1.password==req.body.password) ){
    console.log("matched");
res.send(input);
}
else{
    console.log("Inavlid");
    res.send(false);
}

   
});

app.get('/user', function(req,res){
    res.send(input);
});

app.get('/userdetail', function(req,res){
    res.send(input1);
});

app.post('/upload', (req, res) => {
    var form = new formidable.IncomingForm();
    var file;
    form.parse(req);

    form.on('fileBegin',  (name, file) => {
        file = file;
        file.path = `${__dirname}/client/uplodedFiles/${file.name}`;
    });

    form.on('file',  (name, file) => {
        console.log('Uploaded ' + file.name);
        res.sendStatus(200);
    });

    form.on('progress', function(bytesReceived, bytesExpected) {
        console.log(bytesReceived);
        // res.sendStatus(bytesReceived);
});
    // res.send(`File Uploaded Successfully`);
});


app.listen(3000);  