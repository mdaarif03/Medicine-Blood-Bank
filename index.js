var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')


const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb+srv://raza:12345@cluster0.va60tae.mongodb.net/?retryWrites=true&w=majority');

var db=mongoose.connection;

mongoose.connection.on('connected',connected=>{
    console.log("connected with database...");
});

db.on('error',()=>console.log('Error in connecting to database'));
db.once('open',()=>console.log('connected to database'))

app.post('/signup',(req,res)=>{
    var name=req.body.name;
    var bloodgroup=req.body.bloodgroup;
    var email=req.body.email;
    var phone=req.body.phone;
    var Donateorwant=req.body.Donateorwant;
    var address=req.body.address;
    var State=req.body.State;
    // var password = req.body.password;

    var data={
        "name":name,
        "bloodgroup":bloodgroup,
        "email":email,
        "phone":phone,
        "Donateorwant":Donateorwant,
        "address":address,
        "State":State
        // "passwoed":password
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log('Record Inserted Successfully');
    });
    return res.redirect('signup_success.html')

})

app.get('/',(req,res)=>{
    res.set({
    })
    return res.redirect('index.html');
}).listen('4000');

console.log('Listening on port 4000')