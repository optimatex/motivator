const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to the database
mongoose.connect(
  'mongodb://optimatex:optimat4mbal@ds131784.mlab.com:31784/optimatex',
  { useNewUrlParser: true },
);

const mapSchema = new mongoose.Schema({
  Text: String,
});

const MapModel = new mongoose.model('Map', mapSchema);

const urlencodedParser = bodyParser.urlencoded({ extended: true });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/maps/:mapID', (req, res) => {
  MapModel.find({}, (err, data) => {
    if (err) throw err;

    res.render('map', {
      maps: data,
      mapID: req.params.mapID,
    });
  });
});

app.get('/api/maps/', (req, res) => {
  MapModel.find({}, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

app.post('/api/maps', (req, res) => {
  const newMap = MapModel(req.body).save((err, data) => {
    if (err) throw err;
    console.log('item saved', req.body);
    res.json(data);
  });
});

app.delete('/api/maps/:mapID', (req, res) => {
  console.log('%c req.params', 'color: #0087d4', req.params);
  MapModel.findOneAndRemove({ map: req.params.mapID }, err => {
    if (err) {
      res.send(err);
    } else {
      // res.redirect("/blogs");
    }
  });

  // .deleteOne((deleteError, data) => {
  //   if (deleteError) throw deleteError;
  //   console.log('item removed');
  //   res.json(data);
  // })
});

app.listen(3000);
