const cors = require('cors');
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');




const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
}));

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.use(cors());

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(`App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`);
});

app.get('/supplierdetails', (req, res) => {
  let viewid = req.query.viewid
  let supplierid = req.query.supplierid
  if (supplierid) {
    pool.query(`select * from ` + viewid  + ` where supplierid =` + supplierid, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send(results);
      }
    });
  }
  else {
    pool.query(`select *
                from ZorgPortaal.contacts_v`, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send(results);
      }
    });
  }
});

app.get('/aanbieders', (req, res) => {

  pool.query(`select * from ZorgPortaal.suppliers_v`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});

app.post('/newscreate', function(req,res) {
  console.log('hier');
  var column1 = 'subject';
  var varsubject = req.body.subject;
  pool.query('insert into ZorgPortaal.news ('+column1+') VALUES ("'+varsubject+'");', (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});

app.get('/news', (req, res) => {

  pool.query(`select * from ZorgPortaal.news_v`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});

app.get('/contacts', (req, res) => {
  let supplierid = req.query.supplierid
  if (supplierid) {
    pool.query(`select *
                from ZorgPortaal.contacts_v
                where supplierid =` + supplierid, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send(results);
      }
    });
  }
  else {
    pool.query(`select *
                from ZorgPortaal.contacts_v`, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send(results);
      }
    });
  }
});

app.get('/generaldocs', (req, res) => {

  pool.query(`select * from ZorgPortaal.generaldocs_v`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});