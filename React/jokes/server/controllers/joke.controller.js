const Joke = require("../models/joke.model")

module.exports.getAllJokes = (req,res) => { 
  Joke.find()
    .then((allJokes) => {
      res.json({ jokes: allJokes}); 
    })
    .catch((err)=> { 
      res.json({message: "Something went wrong", error: err});
    });
};

module.exports.getOneJoke = (req,res) => { 
  Joke.findOne({_id: req.params.id})
    .then((oneJoke) => {
      res.json({ joke: oneJoke}); 
    })
    .catch((err)=> { 
      res.json({message: "Something went wrong", error: err});
    });
};

module.exports.createNewJoke = (req, res) => { 
  Joke.create(req.body)
      .then(newJoke => {
        res.json({ joke: newJoke}) 
      })
      .catch((err) => { 
        res.json({message: "Something went wrong", error: err});
      });}

module.exports.editJokeById = (req,res) => { 
  Joke.findOneAndUpdate({_id: req.params.id}, req.body, {
    new: true, 
    runValidators: true
  })
    .then((updatedJoke) => {
      res.json({ joke: updatedJoke}); 
    })
    .catch((err)=> { 
      res.json({message: "Something went wrong", error: err});
    });
};

module.exports.deleteJokeById = (req,res) => { 
  Joke.deleteOne({_id: req.params.id})
    .then((result) => {
      res.json({ result: result}); 
    })
    .catch((err)=> { 
      res.json({message: "Something went wrong", error: err});
    });
};