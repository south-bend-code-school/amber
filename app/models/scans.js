import DS from 'ember-data';

export default DS.Model.extend({
  img: DS.attr('string'),
  person: DS.attr('string'),
  score: DS.attr('number')
});
