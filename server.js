const logger          = require('morgan'),
      http            = require('http'),
      express         = require('express'),
      errorhandler    = require('errorhandler'),
      bodyParser      = require('body-parser'),
      _ = require('underscore')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
  app.use(errorhandler())
}

const TOTAL_USER_COUNT = 200
const users = _.range(1, TOTAL_USER_COUNT).map((num) => {
  const userName = 'user' + ( '000' + num ).slice(-3)
  return { id: num, name: userName }
})

app.get("/api/users", function(req, res) {
  const rowsPerPage = 10
  const page = parseInt(req.query.page || 1, 10)
  const startIndex = (page -1)*rowsPerPage
  res.json({
    users: users.slice(startIndex, startIndex + rowsPerPage),
    pager: {
      page: page,
      rowsPerPage: rowsPerPage,
      totalResults: TOTAL_USER_COUNT
    }
  })
})

app.get("/bundle.js", function(req, res) {
  res.sendFile(__dirname + '/www/bundle.js');
})

app.get("*", function(req, res) {
  res.sendFile(__dirname + '/www/index.html');
})

http.createServer(app).listen(port, function (err) {
  console.log('listening in http://localhost:' + port);
});

