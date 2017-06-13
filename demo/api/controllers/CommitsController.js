/**
 * CommitsController
 *
 * @description :: Server-side logic for managing commits
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var shell = require('shelljs');

module.exports = {
  'all': function(req,res) {
    // get branches
    var branches = shell.exec('git branch -l');
    var status = shell.exec('git log master --format=\'{"refs": "%d", "commit": "%h", "tree": "%t", "parent": "%p", "subject": "%s", "date": "%cd", "author": "%an %ae"},\' --reverse');
    res.json(branches);
  }
};