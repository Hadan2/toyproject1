const express = require('express');
const app = express();
const path = require('path');
const { ObjectId } = require('mongodb');

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

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/react/build/index.html'));
});

  
