// package metadata file for Meteor.js

/* global Package:true */

Package.describe({
    name: 'magicsuggest:magicsuggest',  // https://atmospherejs.com/magicsuggest/magicsuggest
    summary: 'MagicSuggest is a multiple selection auto suggest combo box for Bootstrap 3.',
    version: '3.0.0',
    git: 'https://github.com/magicsuggest/magicsuggest.git'
  });
  
  Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0');
    api.use('jquery', 'bootstrap','client');
    api.addFiles([
      'dist/magicsuggest.css',
      'dist/magicsuggest.js'
    ], 'client');
  });
  