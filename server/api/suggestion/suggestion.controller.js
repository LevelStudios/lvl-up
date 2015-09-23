/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /suggestions              ->  index
 * POST    /suggestions              ->  create
 * GET     /suggestions/:id          ->  show
 * PUT     /suggestions/:id          ->  update
 * DELETE  /suggestions/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
// var Suggestion = require('./suggestion.model');

// Get list of suggestions
exports.index = function(req, res) {
    return res.status(200).json([
        {
    date: "1445731200",
    title: "Nates Birthday",
    copy: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit voluptates eveniet reiciendis perferendis dolorum quas rem quia maiores culpa veniam non distinctio nemo, accusamus inventore, quibusdam, sunt architecto hic vel.",
    location: {
        name: "Portland",
        coord: {
            lat:"45.5186019",
            lng:"-122.6785419"
        }
    }
  },
  {
    date: "1445731200",
    title: "Audreys Birthday",
    copy: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit voluptates eveniet reiciendis perferendis dolorum quas rem quia maiores culpa veniam non distinctio nemo, accusamus inventore, quibusdam, sunt architecto hic vel.",
    location: {
        name: "Siberia",
        coord: {
            lat:"45.5186019",
            lng:"-122.6785419"
        }
    }
  }
    ]);
  // Suggestion.find(function (err, suggestions) {
  //   if(err) { return handleError(res, err); }
  //   return res.status(200).json(suggestions);
  // });
};

// Get a single suggestion
exports.show = function(req, res) {
  return res.status(200).json({hi:"hi"});
  // Suggestion.findById(req.params.id, function (err, suggestion) {
  //   if(err) { return handleError(res, err); }
  //   if(!suggestion) { return res.status(404).send('Not Found'); }
  //   return res.json(suggestion);
  // });
};

// Creates a new suggestion in the DB.
exports.create = function(req, res) {
  return res.status(200).json({hi:"hi"});
  // Suggestion.create(req.body, function(err, suggestion) {
  //   if(err) { return handleError(res, err); }
  //   return res.status(201).json(suggestion);
  // });
};

// Updates an existing suggestion in the DB.
exports.update = function(req, res) {
    return res.status(200).json({hi:"hi"});
  // if(req.body._id) { delete req.body._id; }
  // Suggestion.findById(req.params.id, function (err, suggestion) {
  //   if (err) { return handleError(res, err); }
  //   if(!suggestion) { return res.status(404).send('Not Found'); }
  //   var updated = _.merge(suggestion, req.body);
  //   updated.save(function (err) {
  //     if (err) { return handleError(res, err); }
  //     return res.status(200).json(suggestion);
  //   });
  // });
};

// Deletes a suggestion from the DB.
exports.destroy = function(req, res) {
  return res.status(200).json({hi:"hi"});
  // Suggestion.findById(req.params.id, function (err, suggestion) {
  //   if(err) { return handleError(res, err); }
  //   if(!suggestion) { return res.status(404).send('Not Found'); }
  //   suggestion.remove(function(err) {
  //     if(err) { return handleError(res, err); }
  //     return res.status(204).send('No Content');
  //   });
  // });
};

function handleError(res, err) {
  return res.status(500).send(err);
}