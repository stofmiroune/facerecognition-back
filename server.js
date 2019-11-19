const express=require('express');
const BodyParser=require('body-parser');
const app=express();
var bcrypt = require('bcryptjs');
const cors=require('cors');

const register=require('./Control/Register.js');
const signin=require('./Control/Signin.js');
const profile=require('./Control/Profile.js');
const image=require('./Control/Image.js');


var knex = require('knex')
const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : '',
    password : '',
    database : 'face-recognition'
  }
});

//db.select('*').from('users').then(data=>{console.log(data);});


app.use(BodyParser.json());
app.use(cors());


app.get('/',(req,res)=>{
  res.send(database.users);
})

app.post('/signin',signin.handleSignin(bcrypt,db))

app.post('/register',register.handleRegister(bcrypt,db))


app.get('/profile/:id',profile.handleProfile(db))
//  if(!found){
  //  res.status(400).json('not found');
  //}


app.put('/image',image.handleImage(db))
app.put('/imageurl',image.handleApiCall())

app.listen(3000,()=> {
  console.log('app is running on port 3000')
}
)
console.log(process.env.port);
