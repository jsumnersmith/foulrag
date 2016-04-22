// grab the nerd model we just created
var Poem = require('./models/poem');
var pson = require('./lib/pson');

module.exports = function(app) {

  // server routes ===========================================================
  // sample api route
  app.get('/api/poems', function(req, res) {
    Poem.find(function(err, poems) {

        // if there is an error retrieving, send the error.
                        // nothing after res.send(err) will execute
        if(err){
          res.send(err);
        }

        if(!poems){
          console.log("There wasn't anything");
          res.json('No Poems')
        }

        res.json(poems); // return all nerds in JSON format
    });
  });

  app.get('/api/poem/:id', function(req, res) {
    // use mongoose to get all nerds in the database
    Poem.findOne({_id: req.params.id}, function(err, poem) {

        // if there is an error retrieving, send the error.
                        // nothing after res.send(err) will execute
        if(err){
          res.send(err);
        }

        if(!poem){
          console.log("There wasn't anything");
          res.json('No Poem')
        }
        res.json(poem); // return all nerds in JSON format
    });
  });

  // route to handle creating goes here (app.post)
  app.post('/api/poem', function(req, res) {
    // use mongoose to get all nerds in the database
    console.log("You are about to create a poem");

    var poem = new Poem();

    poem.title = req.body.title;
    poem.author = req.body.author;
    poem.lines = pson(req.body);

    poem.save(function(err){
      if (err) {
        console.log("The error is", err);
        res.send(err);
      }
      res.json({ message: 'You added a poem' });
    });

  });
  // route to handle delete goes here (app.delete)
  // app.post('/api/poem', function(req, res) {
  //   // use mongoose to get all nerds in the database
  //   console.log("You are about to create a poem");
  //
  //   var poem = new Poem();
  //
  //   //console.log(req.body);
  //   poem.title = req.body.title;
  //   poem.author = req.body.author;
  //   poem.lines = pson(req.body);
  //
  //   poem.save(function(err){
  //     if (err) {
  //       console.log("The error is", err);
  //       res.send(err);
  //     }
  //     res.json({ message: 'You added a poem' });
  //   });
  //
  // });

  app.delete('/api/poem/:poem_id', function(req, res){
    Poem.remove({
      _id: req.params.poem_id
    }, function(err, poem){
      if (err) {
        console.log("The error is", err);
        res.send(err);
      }

      res.json({ message: 'Successfully deleted a poem' });
    });
  });

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html'); // load our public/index.html file
  });

};
