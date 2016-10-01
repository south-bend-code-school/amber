import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['alert-form','row'],

  actions: {
    save(){
      this.get('alert').save();
    },
    cancel(){
      this.set('alert',null);
      let router = this.get('router');
      router.transitionTo('main.dashboard');
    }
  }
});
