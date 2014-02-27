var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
    //var data = {'alt': false};
    projects['alt'] = false;
  	res.render('index', projects);
};
exports.viewGrid = function(req, res) {
    projects['alt'] = true;
    //var data = {'alt': true};
    res.render('index', projects);
};

exports.viewAlternate = function(req, res) {
   var data = {'showAlternate': true};
    res.render('index', projects);
};

