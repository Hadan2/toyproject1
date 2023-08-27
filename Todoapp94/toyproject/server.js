const express = require('express');
const app = express();
const path = require('path');

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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/react/build/index.html'));
});

app.get('/data', (req,res) => {
  res.send("data입니다");
});

app.post('/data', (req,res) => {
  console.log(req.body)
  db.collection('info').insertOne( {id: req.body.id, pwd: req.body.pwd} , (err, result) => {
    /* console.log('success99')  */
    res.send("success")
  })
  
})

app.post('/data2', (req,res) => {
  console.log(req.body)
  db.collection('todolist').insertOne( {title : req.body.title, content:req.body.content, date:req.body.date }, (err, result) => {
    /* console.log('success99')  */
    res.send("success")
  })
  
})



app.get('/data2', (req,res) => {
  db.collection('todolist').find().toArray((err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.json(result); // 클라이언트에게 JSON 형식의 데이터를 반환
    }
    });
})

app.delete('/data2', (req,res) => {
  let title1 = req.body.title;
   db.collection('todolist').deleteOne({title:title1}, (err,result) => {
    
    if(err) console.log(err);
    console.log(result)   

    if(result.deletedCount == 0) {
      res.status(500).send('FAil')
    }
    else {
      res.send('delete success');
    }
    
   })
 })

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/react/build/index.html'));
});

  
