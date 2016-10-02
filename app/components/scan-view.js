import Ember from 'ember';

export default Ember.Component.extend({
  convertedScore: Ember.computed('scan.score',function(){
    let score = this.get('scan.score');
    return Math.floor(score*100);
  }),
});
