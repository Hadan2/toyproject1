const express = require('express');
const app = express();
const path = require('path');
const { ObjectId } = require('mongodb');

//login
const dotenv = require('dotenv')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(express.json());
var cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
var db;

app.use(express.static(path.join(__dirname, 'react/build')));

app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs");
app.use('/static', express.static('static'));
app.use('/public', express.static('public'))

app.use(session({
  secret: 'your-secret-key', // 세션을 암호화할 때 사용할 비밀 키
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

MongoClient.connect('mongodb+srv://Hadan2:fortis192@hadan2.gh0cdrh.mongodb.net/?retryWrites=true&w=majority',{ useUnifiedTopology: true } , function(err,client) {
    if(err) return console.log(err);

    db = client.db('toyproject');

    app.listen(8080, function() {
        console.log('listening on 8080')
    })
        
})


app.post('/info', (req,res) => {
  console.log(req.body)
  db.collection('info').insertOne( {id: req.body.id, pwd: req.body.pwd} , (err, result) => {
    /* console.log('success99')  */
    res.send("success")
  })
  
})

app.post('/data2', (req,res) => {
  console.log(req.body)
  db.collection('todolist').insertOne( {
    title : req.body.title, 
    content:req.body.content, 
    date:req.body.date,
    complete:false

  }, (err, result) => {
    /* console.log('success99')  */
    res.send("success")
  })
  
})



app.get('/data2', (req,res) => {
  db.collection('todolist').find().toArray((err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.json(result); 
    }
    });
})

app.post("/modify/:id", (req, res) => {
  db.collection("todolist").updateOne(
    { _id: ObjectId(req.params.id) },
    {
      $set: {
        complete:true
      }
    },
    
    (err, result) => {
      res.send("modify success");
    }
  );
});

 app.delete("/delete/:id", (req, res) => {
  db.collection("todolist").deleteOne({ _id: ObjectId(req.params.id) },(err, result) => {
      //console.log(typeof req.params.id)
      res.send("delete success");
    }
  );
});

//Login
app.post('/loginServer', passport.authenticate('local', {failureRedirect: '/fail'}), (req,res) => {
  console.log("zx")
  res.send('success8');
})

passport.use(new LocalStrategy({
  usernameField: 'id',
  passwordField: 'pw',
  session: true,
  passReqToCallback: false,
}, function (InputId, InputPw, done) {
  // console.log(InputId, InputPw);
  db.collection('info').findOne({id: InputId}, (err,result) => {
    if(err) console.log(err);

    if(!result) return done(null, false, {message: '존재하지 않는 아이디입니다'})
    if(InputPw == result.pw) return done(null, result)
    else return done(null, false, {message: '비번틀림'})
  })
}))
passport.serializeUser(function (user, done) {
  done(null, user.id)
});

passport.deserializeUser(function (id, done) {
  db.collection('info').findOne({id: id}, (err,result) => {
    done(null, result);
  })
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/react/build/index.html'));
});

  
