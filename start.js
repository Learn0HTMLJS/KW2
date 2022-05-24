const express = require('express');
const port = 5500;
const cors = require('cors');
const app = express();
const jsonParser = express.json();

app.use(cors());

const page = app.use('/' ,express.static('Client'));

app.post('/', jsonParser, function (request, response) {
  let header = request.get('Content-Type1');
  if(header != 'application/json1')
  {
    response.statusCode = 400;
    let r = {
      'status': 'error',
      'message': "Неверный тип данных"
    }
    response.send(JSON.stringify(r));
    return;
  }
  /*    formData.append('Type', radioc.value);
    formData.append('Date', Date.value);
    formData.append('Name', Name.value);
    formData.append('Level', Level.value);*/
  let d = request.body.JSON.Date;
  console.log(d);
  let Type = d['Type'];
  let Date = d['Date'];
  let Name = d['Name'];
  let Level = d['Level'];
  if(!Type || !Date)
  {
    response.statusCode = 400;
    let r = {
      'status': 'error',
      'message': "Не хватает данны"
    }
    response.send(JSON.stringify(r));
    return;
  }
  response.statusCode = 200;
  let r = {
    'status': 'всё ОК'
  }
  response.send(JSON.stringify(r));
});


/*
  if(!request)
  {
    response.statusCode = 400;
    let r = {
      'status': 'error',
      'message': "Не хватает данных"
    }
    response.send(JSON.stringify(r));
  }
*/
app.get('/', function (request, response) {
//  response.sendFile(__dirname , '/Client', '/index.html');
response.send('dfghj');
  console.log(`подключен`);
});

app.listen(port, '127.0.0.1', () => {
  console.log(`порт ${port}`);
  //console.log(__dirname + '..' , 'Client', 'index.html');

});
