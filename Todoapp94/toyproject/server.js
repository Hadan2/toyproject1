const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'react/build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/react/build/index.html'));
  });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/react/build/index.html'));
});

app.listen(8080, () => {
    console.log('서버가 8080 포트에서 실행 중입니다.');
});