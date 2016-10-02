import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main', {path: '/authorities'}, function() {
    this.route('dashboard', {path: '/dashboard'}, function() {
      this.route('createAlert', {path: '/createAlert'});
    });
    this.route('thank-you');
    this.route('create-alert');
  });
  this.route('thank-you');
});

export default Router;
