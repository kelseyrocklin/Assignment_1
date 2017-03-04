// call packages

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 8080;

// app configuration
// uses body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

// configure the app to handle CORS requests - GET/POST
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, /Authorization');
    next();
});

// log requests to the console
// log all requests to the console
app.use(morgan('dev'));

// home page route
app.all('/', function(req, res){

        res.status(400);
        res.json({message: 'Invalid HTTP request'});
});

// get an instance of the express router
var apiRouter = express.Router();

// base route - will not accept any request =====================================================
apiRouter.route('/')

    .all(function(req, res){

        res.status(400);
        res.json({message: 'Invalid HTTP request'});
    });


// route that ends in /gets =====================================================
apiRouter.route('/gets')

    .get(function(req, res){

        var resp = {
            "message": 'GET request has been received',
            "headers": req.headers,
            "body_params": req.body,
            "query_params": req.query
        };

        res.json(resp);
    })

    .all(function(req, res){

        res.status(400);
        res.json({message: 'Invalid HTTP request'});
    });

// route that ends in /posts =====================================================
apiRouter.route('/posts')

    .post(function(req, res){

        var resp = {
            "message": 'POST request has been received',
            "headers": req.headers,
            "body_params": req.body,
            "query_params": req.query
        };

        res.json(resp);
    })

    .all(function(req, res){

        res.status(400);
        res.json({message: 'Invalid HTTP request'});
    });

// route that ends in /puts =====================================================
apiRouter.route('/puts')

    .put(function(req, res){

        var resp = {
            "message": 'PUT request has been received',
            "headers": req.headers,
            "body_params": req.body,
            "query_params": req.query
        };

        res.json(resp);
    })

    .all(function(req, res){

        res.status(400);
        res.json({message: 'Invalid HTTP request'});
    });

// route that ends in /delete =====================================================
apiRouter.route('/deletes')

    .delete(function(req, res){

        var resp = {
            "message": 'DELETE request has been received',
            "headers": req.headers,
            "body_params": req.body,
            "query_params": req.query
        };

        res.json(resp);
    })

    .all(function(req, res){

        res.status(400);
        res.json({message: 'Invalid HTTP request'});
    });


// Register our routes - - - - - - - - - - - - - - -
// all of our routes will be prefixed with /api
app.use('/', apiRouter);

// start the server - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
app.listen(port);
console.log('Check port ' + port + ' for server.');
