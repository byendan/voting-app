'use strict';

var Polls = require('../models/polls.js');
var Users = require('../models/users.js');

function PollHandler () {
    
    this.addPoll = function (req, res) {
        var title = req.body.question;
        var answers = Array.prototype.slice.call(req.body.answers.answer);

        var formattedAnswers = [];
        for(var i = 0; i < answers.length; i++) {
            formattedAnswers.push({response: answers[i], votes: 0});
        }
        
        Users.findOne({ 'github.id': req.user.github.id })
            .exec(function (err, result) {
                if(err) { throw err; }
                var user = result.id;
                
                var newPoll = new Polls({
                    title: title,
                    responses: formattedAnswers,
                    user: user
                }); 
                
                newPoll.save(function(err, poll) {
                    if(err) { throw err; }
                    console.log("I saved this for you: " + poll);
                    res.redirect("/users/" + user + "/polls/" + poll.id);
                });
            });
        
        
    };
    
    this.getPoll = function(req, res) {
        
        Polls.findOne({ '_id': req.params.pollId })
            .exec(function(err, result) {
                if (err) { throw err; }
         
                res.json(result);
            });
    };
    
    this.edditPoll = function(req, res) {
        
    };
    
    

}

module.exports = PollHandler;
