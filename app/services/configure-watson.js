import Ember from 'ember';
import ENV from 'amber-alert/config/environment';
import Zipper from 'npm:jszip';

export default Ember.Service.extend({
  configure(file){
    Ember.$.ajax({
      type: "POST",
      url: `${ENV.APP.NodeRed.URL}/report`,
      data: {
        image: file
      }
    });
  }
});
